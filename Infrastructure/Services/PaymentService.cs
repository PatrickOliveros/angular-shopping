using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specification;
using Microsoft.Extensions.Configuration;
using Stripe;
using Order = Core.Entities.OrderAggregate.Order;
using Product = Core.Entities.Product;

namespace Infrastructure.Services
{
    public class PaymentService : IPaymentService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IBasketRepository _basketRepository;
        private readonly IConfiguration _config;
        public PaymentService(IUnitOfWork unitOfWork, IBasketRepository basketRepository, IConfiguration config)
        {
            _config = config;
            _basketRepository = basketRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<CustomerBasket> CreateOrUpdatePaymentIntent(string basketId)
        {
            StripeConfiguration.ApiKey = _config["StripeSettings:SecretKey"];

            var basket = await _basketRepository.GetBasketAsync(basketId);

            if (basket == null) return null;

            var shippingPrice = 0m; // for money

            if (basket.DeliveryMethodId.HasValue)
            {
                var deliveryMethod = await _unitOfWork.Repository<DeliveryMethod>().GetByIdAsync((int)basket.DeliveryMethodId);
                shippingPrice = deliveryMethod.Price;
            }

            foreach (var item in basket.Items)
            {
                var productItem = await _unitOfWork.Repository<Product>().GetByIdAsync(item.Id);
                if (item.Price != productItem.Price)
                {
                    item.Price = productItem.Price;
                }
            }

            var service = new PaymentIntentService();

            PaymentIntent intent;

            if (string.IsNullOrEmpty(basket.PaymentIntentId))
            {
                var options = new PaymentIntentCreateOptions
                {
                    // stripe doesn't accept decimals, only long
                    // todo: why use long vs decimals for money?
                    Amount = GetBasketAmount(basket, shippingPrice),
                    Currency = "usd",
                    PaymentMethodTypes = new List<string> { "card" }
                };
                intent = await service.CreateAsync(options);
                basket.PaymentIntentId = intent.Id;
                basket.ClientSecret = intent.ClientSecret;
            }
            else
            {
                var options = new PaymentIntentUpdateOptions
                {                   
                    Amount = GetBasketAmount(basket, shippingPrice)
                };
                await service.UpdateAsync(basket.PaymentIntentId, options);
            }

            await _basketRepository.UpdateBasketAsync(basket);

            return basket;
        }

        private long GetBasketAmount(CustomerBasket basket, decimal shippingPrice) {

            return (long)basket.Items.Sum(i => i.Quantity * (i.Price * 100)) + (long)shippingPrice * 100;
        }

        public async Task<Order> UpdateOrderPaymentFailed(string paymentIntentId)
        {
            var order = await GetOrderDetailsByPaymentIntentId(paymentIntentId);

            if (order == null) return null;

            order.Status = OrderStatus.PaymentFailed;
            _unitOfWork.Repository<Order>().Update(order);

            await _unitOfWork.Complete();

            return order;
        }

        public async Task<Order> UpdateOrderPaymentSucceeded(string paymentIntentId)
        {
            var order = await GetOrderDetailsByPaymentIntentId(paymentIntentId);

            if (order == null) return null;

            order.Status = OrderStatus.PaymentReceived;
            _unitOfWork.Repository<Order>().Update(order);

            await _unitOfWork.Complete();

            return order;
        }

        private async Task<Order> GetOrderDetailsByPaymentIntentId(string paymentIntentId) {
            var spec = new OrderByPaymentIntentWithItemsSpecification(paymentIntentId);
            var order = await _unitOfWork.Repository<Order>().GetEntityWithSpec(spec);

            return order;
        }

        public async Task<Order> UpdateOrderPaymentStatus(string paymentIntentId, bool isPaymentSuccessful = true)
        {
            var order = await GetOrderDetailsByPaymentIntentId(paymentIntentId);

            if (order == null) return null;

            order.Status = isPaymentSuccessful ? OrderStatus.PaymentReceived : OrderStatus.PaymentFailed;
            _unitOfWork.Repository<Order>().Update(order);

            await _unitOfWork.Complete();

            return order;
        }


    }
}