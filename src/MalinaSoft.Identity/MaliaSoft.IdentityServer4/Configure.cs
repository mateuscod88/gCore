using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MaliaSoft.IdentityServer4
{
    public class Config
    {
        // Clients allowed to access resources from Auth Server
        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
        {
            new Client
            {
                ClientId = "client",
                AllowedGrantTypes = GrantTypes.ClientCredentials,
                ClientSecrets =
                {
                    new Secret("secret".Sha256())
                },
                AllowedScopes = {"api1"}
            },
                new Client
            {
                ClientId = "client2",
                AllowedGrantTypes = GrantTypes.ClientCredentials,
                ClientSecrets =
                {
                    new Secret("secret".Sha256())
                },
                AllowedScopes = {"api2","api3"}
            },
                   new Client
            {
                ClientId = "client3",
                AllowedGrantTypes = GrantTypes.ClientCredentials,
                ClientSecrets =
                {
                    new Secret("secret".Sha256())
                },
                AllowedScopes = {"api3"}
            }
        };
        }

        // APIs allowed to access the Auth server
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
        {
            new ApiResource("apires1", "My Api"){Scopes={"api1" },Description="witaj1"  },
            new ApiResource("apires2", "Web App My Api"){Scopes={"api2","api3" },Description="witaj2" },
            new ApiResource("apires3", "Web App My Api"){Scopes={"api3" },Description="witaj3" }

        };
        }
        public static IEnumerable<ApiScope> ApiScopes =>
           new List<ApiScope>
           {
                new ApiScope("api1", "My API"),
                new ApiScope("api2", "My API"),
                new ApiScope("api3", "My API")


           };

    }
}
