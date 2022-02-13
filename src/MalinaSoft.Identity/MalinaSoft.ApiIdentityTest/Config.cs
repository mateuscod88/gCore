using IdentityServer4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MalinaSoft.ApiIdentityTest
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
            }
        };
        }

        // APIs allowed to access the Auth server
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
        {
            new ApiResource("api1", "My Api")
        };
        }
    }
}
