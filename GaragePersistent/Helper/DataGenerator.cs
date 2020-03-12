using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.DependencyInjection;
using GaragePersistent.Seed;

namespace GaragePersistent.Helper
{
    public class DataGenerator
    {
        public void Initialize<T>(IServiceProvider serviceProvider)
        {
            using (var context = new GaragePersistent.Context.GarageContext(serviceProvider.GetRequiredService<DbContextOptions<GaragePersistent.Context.GarageContext>>()))

            {
                context.Car.AddRange(CarSeed.GetAll());
                context.SaveChanges();
            }
        }
    }
}
