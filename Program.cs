using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using GaragePersistent.Entities;
using GaragePersistent.Helper;
using GaragePersistent.Seed;
using GaragePersistent.Seed.SeedReader;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace GarazMechanicCore
{
    public class Program
    {
        
        public static void Main(string[] args)
        {
            var hostUrl = "http://0.0.0.0:5000";
            var host = CreateWebHostBuilder(args,hostUrl).Build();

            host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args,string hostUrl) =>
            WebHost.CreateDefaultBuilder(args)
                //.UseUrls(hostUrl)
                .UseStartup<Startup>();
    }
}
