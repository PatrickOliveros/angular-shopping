using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Core.Extensions
{
    public static class UserManagerExtensions
    {
        public static TokenValidationParameters GetTokenValidationParameters(string tokenKey, string tokenIssuer)
        {
            return new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey)),
                ValidIssuer = tokenIssuer,
                ValidateIssuer = true,
                ValidateAudience = false,
                // set clockskew to zero so tokens expire exactly at token expiration time 
                ClockSkew = System.TimeSpan.Zero
            };
        }
    }
}
