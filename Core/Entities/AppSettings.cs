namespace Core.Entities
{
    public class AppSettings
    {
        public ConnectionStrings ConnectionStrings { get; set; }

        public string ApiUrl { get; set; }

        public string AngularApp { get; set; }

        public Token Token { get; set; }

        public StripeSettings StripeSettings { get; set; }
    }

    
    public class ConnectionStrings
    {
        public string DefaultConnection { get; set; }

        public string IdentityConnection { get; set; }

        public string Redis { get; set; }
    }

    public class Token
    {
        public string Key { get; set; }

        public string Issuer { get; set; }
    }

    public class StripeSettings
    {
        public string WhSecret { get; set; }

        public string PublishKey { get; set; }
    }
}
