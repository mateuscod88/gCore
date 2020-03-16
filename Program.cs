using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using GaragePersistent.Entities;
using GaragePersistent.Helper;
using GaragePersistent.Seed;
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

            var host = CreateWebHostBuilder(args).Build();
            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                //var context = services.GetRequiredService<GaragePersistent.Context.GarageContext>();
                new DataGenerator().Initialize<Car>(services,CarSeed.GetAll());
                new DataGenerator().Initialize<CarBrand>(services, BrandSeed.GetAll());
                new DataGenerator().Initialize<CarModel>(services, ModelSeed.GetAll());
                new DataGenerator().Initialize<CarEngine>(services, EngineSeed.GetAll());
                new DataGenerator().Initialize<CarOwner>(services, OwnerSeed.GetAll());
            }

            host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
