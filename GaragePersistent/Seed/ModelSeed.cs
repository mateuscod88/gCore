using GaragePersistent.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Seed
{
    public static class ModelSeed
    {
        public static IEnumerable<CarModel> GetAll()
        {
            return new List<CarModel>
            {
                new CarModel
                {
                    Id = "1",
                    Name = "Golf",
                    CarBrandId = "1"

                },
                new CarModel
                {
                    Id = "2",
                    Name = "Passat",
                    CarBrandId = "1"

                },
                new CarModel
                {
                    Id = "3",
                    Name = "Polo",
                    CarBrandId = "1"
                },
                new CarModel
                {
                    Id = "4",
                    Name = "A4",
                    CarBrandId = "2"

                },
                new CarModel
                {
                    Id = "5",
                    Name = "A6",
                    CarBrandId = "2"

                },
                new CarModel
                {
                    Id = "6",
                    Name = "A3",
                    CarBrandId = "2"
                },
                new CarModel
                {
                    Id = "7",
                    Name = "Superb",
                    CarBrandId = "3"

                },
                new CarModel
                {
                    Id = "8",
                    Name = "Octavia",
                    CarBrandId = "3"

                },
                new CarModel
                {
                    Id = "9",
                    Name = "Rapid",
                    CarBrandId = "3"
                }
            };
        }
    }
}
