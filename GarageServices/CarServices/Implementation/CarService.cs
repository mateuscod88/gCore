using GaragePersistent.Context;
using GaragePersistent.Entities;
using GarageServices.CarServices.Dto;
using GarageServices.CarServices.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.CarServices.Implementation
{
    public class CarService : ICarService
    {
        private readonly GarageContext _garageContext;
        
        public CarService(GarageContext garageContext)
        {
            _garageContext = garageContext;
            //var options = new DbContextOptionsBuilder<GarageContext>()
            //    .UseInMemoryDatabase(databaseName: "GarageApp")
            //    .Options;

            //_garageContext = new GarageContext(options);
        }

        public async Task Add(CarAddDto carAddDto)
        {
            var carEntity = new Car
            {
                BrandId = carAddDto.BrandId,
                EngineId = carAddDto.EngineId,
                ModelId = carAddDto.ModelId,
                OwnerId = carAddDto.OwnerId,
                KilometerCounter = carAddDto.KilometerCounter,
                PlateNumber = carAddDto.PlateNumber,
                Phone = carAddDto.Phone,
                TechnicalCheck = carAddDto.TechnicalCheck,
                Year = carAddDto.Year,
            };
            await _garageContext.AddAsync(carEntity);
            await _garageContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<CarDto>> GetAllAsync()
        {
            var cars = _garageContext.Car
                .Select(x =>
                new CarDto
                {
                    Id = x.Id,
                    Brand = x.Brand.Name,
                    Model = x.Model.Name,
                    Engine = x.Engine.Name
                }).ToList();

            return await _garageContext.Car
                .Select(x => 
                new CarDto 
                { 
                    Id = x.Id,
                    Brand = x.Brand.Name,
                    Model = x.Model.Name,
                    Engine = x.Engine.Name
                }).ToListAsync();
        }

    }
}
