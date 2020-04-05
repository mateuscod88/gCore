using GaragePersistent.Context;
using GaragePersistent.Entities;
using GarageServices.BaseServices.Interfaces;
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
    public class CarService : BaseContext, ICarService
    {
        public CarService(GarageContext garageContext) : base(garageContext)
        {
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

        public Task Delete(string carId)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<CarDto>> GetAllAsync(int pageSize, int pageNumber)
        {

            return await _garageContext.Car
                .Select(x =>
                new CarDto
                {
                    Id = x.Id,
                    Brand = x.Brand.Name,
                    Model = x.Model.Name,
                    Engine = x.Engine.Name,
                    Owner = $"{ x.Owner.FirstName} {x.Owner.LastName}"
                }).Skip(pageSize * pageNumber).Take(pageSize).ToListAsync();
        }

        public async Task<IEnumerable<CarDto>> GetAllAsync()
        {

            return await _garageContext.Car
                .Select(x =>
                new CarDto
                {
                    Id = x.Id,
                    Brand = x.Brand.Name,
                    Model = x.Model.Name,
                    Engine = x.Engine.Name,
                    Owner = $"{ x.Owner.FirstName} {x.Owner.LastName}"
                }).ToListAsync();
        }

        public Task Update(CarAddDto carAddDto)
        {
            throw new NotImplementedException();
        }
    }
}
