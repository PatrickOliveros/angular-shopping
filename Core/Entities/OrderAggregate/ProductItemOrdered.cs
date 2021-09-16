namespace Core.Entities.OrderAggregate {
    public class ProductItemOrdered {

        public ProductItemOrdered () { }

        // this will keep a record of the item at the time ir was ordered
        public ProductItemOrdered (int productItemId, string productName, string pictureUrl) {
            ProductItemId = productItemId;
            ProductName = productName;
            PictureUrl = pictureUrl;
        }

        public int ProductItemId { get; set; } public string ProductName { get; set; } public string PictureUrl { get; set; }

    }
}