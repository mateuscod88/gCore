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

        public async Task<string> Add(CarAddDto carAddDto)
        {
            var carEntity = new Car
            {
                Id = Guid.NewGuid().ToString(),
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
            return carEntity.Id;
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
                    Owner = $"{ x.Owner.FirstName} {x.Owner.LastName}",
                    RegNum = x.PlateNumber,
                    Phone = x.Phone,
                    DueDateTechService = x.TechnicalCheck.ToShortDateString(),
                    LastOilChange = x.LastOilChange.ToShortDateString()
                }).ToListAsync();
        }

        public async Task<CarDto> GetById(string carId)
        {
            return await _garageContext.Car
                .Select(x =>
                new CarDto
                {
                    Id = x.Id,
                    Brand = x.Brand.Name,
                    BrandId = x.BrandId,
                    Model = x.Model.Name,
                    ModelId = x.ModelId,
                    Engine = x.Engine.Name,
                    EngineId = x.EngineId,
                    Owner = x.Owner != null ? "{ x.Owner.FirstName} {x.Owner.LastName}": null,
                    OwnerId = x.OwnerId,
                    RegNum = x.PlateNumber,
                    Phone = x.Phone,
                    DueDateTechService = x.TechnicalCheck.ToShortDateString(),
                    LastOilChange = x.LastOilChange.ToShortDateString(),
                    Year = x.Year,
                    KilometerCounter = x.KilometerCounter,
                    TechnicalService = x.TechnicalCheck.ToShortDateString()
                }).SingleOrDefaultAsync(x => x.Id ==carId);
        }

        public async Task Update(CarAddDto carAddDto,string carId)
        {
            var carEntitie = await _garageContext
                .Car
                .SingleOrDefaultAsync(x => x.Id == carId);

            carEntitie.BrandId = carAddDto.BrandId;
            carEntitie.EngineId = carAddDto.EngineId;
            carEntitie.ModelId = carAddDto.ModelId;
            carEntitie.OwnerId = carAddDto.OwnerId;
            carEntitie.KilometerCounter = carAddDto.KilometerCounter;
            carEntitie.PlateNumber = carAddDto.PlateNumber;
            carEntitie.Phone = carAddDto.Phone;
            carEntitie.TechnicalCheck = carAddDto.TechnicalCheck;
            carEntitie.Year = carAddDto.Year;
            _garageContext.Car.Update(carEntitie);
            await _garageContext.SaveChangesAsync();
        }
    }
}
