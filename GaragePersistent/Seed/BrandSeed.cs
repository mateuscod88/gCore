using GaragePersistent.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Seed
{
    public static class BrandSeed
    {
        public static IEnumerable<CarBrand> GetAll()
        {
            return new List<CarBrand>
            {
                new CarBrand
                {
                    Id = "1",
                    Name = "Vw",
                    
                },
                new CarBrand
                {
                    Id = "2",
                    Name = "Audi"

                },
                new CarBrand
                {
                    Id = "3",
                    Name = "Skoda"

                }

            };
        }
    }
}
