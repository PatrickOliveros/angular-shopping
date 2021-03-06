using API.DTO;
using AutoMapper;
using Core.Entities;
using Configuration = Microsoft.Extensions.Configuration;

namespace API.Helpers {

    public class ProductUrlResolver : IValueResolver<Product, ProductToReturnDTO, string>
    {
        private readonly Configuration.IConfiguration _config;

        public ProductUrlResolver(Configuration.IConfiguration config )
        {
            _config = config;            
        }        
        
        public string Resolve(Product source, ProductToReturnDTO destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrWhiteSpace(source.PictureUrl)) {
                return _config["ApiUrl"] + source.PictureUrl;
            }

            return null;
        }
    }
}