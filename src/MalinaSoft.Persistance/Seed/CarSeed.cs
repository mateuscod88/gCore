using GaragePersistent.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Seed
{
    public static class CarSeed
    {
        public static IEnumerable<Car> GetAll()
        {
            return new List<Car>
            {
                new Car
                {
                    Id="1",
                    BrandId = "1",
                    EngineId = "1",
                    ModelId = "1",
                    OwnerId = "1",
                    KilometerCounter = "180000",
                    PlateNumber = "BBI19299",
                    Phone = "514432543",
                    TechnicalCheck = DateTime.Now,
                    Year = "2000",
                },
                new Car
                {
                    Id="2",
                    BrandId = "2",
                    EngineId = "2",
                    ModelId = "2",
                    OwnerId = "2",
                    KilometerCounter = "180000",
                    PlateNumber = "BBI19299",
                    Phone = "514432543",
                    TechnicalCheck = DateTime.Now,
                    Year = "2000",
                },
                new Car
                {
                    Id="3",
                    BrandId = "3",
                    EngineId = "3",
                    ModelId = "3",
                    OwnerId = "3",
                    KilometerCounter = "180000",
                    PlateNumber = "BBI19299",
                    Phone = "514432543",
                    TechnicalCheck = DateTime.Now,
                    Year = "2000",
                }

            };
        }
    }
}
