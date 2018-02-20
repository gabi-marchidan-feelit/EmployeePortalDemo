// Copyright (c) Brock Allen & Dominick Baier. All rights reserved.
// Licensed under the Apache License, Version 2.0. See LICENSE in the project root for license information.

using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using System.Collections.Generic;
using System.Security.Claims;

namespace QuickstartIdentityServer
{
    public class Config
    {
        // scopes define the resources in your system
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new List<IdentityResource>
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
            };
        }

        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("api1", "My API")
            };
        }

        // clients want to access resources (aka scopes)
        public static IEnumerable<Client> GetClients(int jsClientPort)
        {
            // client credentials client
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
                    AllowedScopes = { "api1" }
                },

                // resource owner password grant client
                new Client
                {
                    ClientId = "ro.client",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPassword,

                    ClientSecrets = 
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowedScopes = { "api1" }
                },

                // OpenID Connect hybrid flow and client credentials client (MVC)
                new Client
                {
                    ClientId = "mvc",
                    ClientName = "MVC Client",
                    AllowedGrantTypes = GrantTypes.HybridAndClientCredentials,

                    ClientSecrets = 
                    {
                        new Secret("secret".Sha256())
                    },

                    RedirectUris = { "http://localhost:5002/signin-oidc" },
                    PostLogoutRedirectUris = { "http://localhost:5002/signout-callback-oidc" },

                    AllowedScopes = 
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "api1"
                    },
                    AllowOfflineAccess = true
                },

                // JavaScript Client
                new Client
                {
                    ClientId = "js",
                    ClientName = "JavaScript Client",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    AllowAccessTokensViaBrowser = true,

                    RedirectUris = { string.Format("http://localhost:{0}/callback.html",jsClientPort) },
                    PostLogoutRedirectUris = { string.Format("http://localhost:{0}/index.html", jsClientPort) },
                    AllowedCorsOrigins = { string.Format("http://localhost:{0}", jsClientPort) },

                    AllowedScopes =
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        "api1"
                    },
                    RequireConsent = false,
                  
                }
            };
        }

        public static List<TestUser> GetUsers()
        {
            return new List<TestUser>
            {
                new TestUser
                {
                    SubjectId = "1270285",
                    Username = "20165288",
                    Password = "password",

                    Claims = new List<Claim>
                    {
                        new Claim("personId", "1270285"),
                        new Claim("badgeId", "20165288"),
                        new Claim("firstName", "Jfclneawxe"),
                        new Claim("lastName", "Zbykhbtexg"),
                        new Claim("fullName", "Zbykhbtexg, Jfclneawxe Klybelssgl"),
                        new Claim("email", "164590910181pers@rgis.com"),
                        new Claim("organizationId", "D761"),
                    }
                },
               new TestUser
                {
                    SubjectId = "1266683",
                    Username = "1534397",
                    Password = "password",

                    Claims = new List<Claim>
                    {
                        new Claim("personId", "1266683"),
                        new Claim("badgeId", "1534397"),
                        new Claim("firstName", "Udfurcjjff"),
                        new Claim("lastName", "Ysmblpzmna"),
                        new Claim("fullName", "Ysmblpzmna, Udfurcjjff Fdacsuosyz"),
                        new Claim("email", "5717437423106pers@rgis.com"),
                        new Claim("organizationId", "D204"),
                    }
                },
            };
        }
    }
}