using GaragePersistent.Context;
using GaragePersistent.Entities;
using GarageServices.BaseServices.Interfaces;
using GarageServices.CarServices.Dto;
using GarageServices.CarServices.Interface;
using GarageServices.RepairService.Dto;
using MalinaSoft.GarageRepairRegistrator.Interfaces.Repositories;
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
        //public CarService(GarageContext garageContext) : base(garageContext)
        //{BaseContext,
        //}
        private readonly IRepairRepository _repairRepository;
        private readonly ICarRepository _carRepository;
        public CarService(ICarRepository carRepository, IRepairRepository repairRepository)
        {
            _carRepository = carRepository;
            _repairRepository = repairRepository;
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
                CreateDate = DateTime.Now
            };
            //var ct = _garageContext.ChangeTracker;
            //ct.Entries().ToList().ForEach(x => x.State = EntityState.Detached);
            //await _garageContext.AddAsync(carEntity);
            //await _garageContext.SaveChangesAsync();
            await _carRepository.AddAsync(carEntity);
            return carEntity.Id;
        }

        public async Task Delete(string carId)
        {
            var car = await _carRepository.GetByIdAsync(carId);
            car.IsDeleted = true;
            var repairs = await _repairRepository.GetCarRepairsByCarId(carId);
            repairs.ForEach(x => x.IsDeleted = true);
            await _repairRepository.UpdateManyAsync(repairs);
            await _carRepository.UpdateAsync(car);
        }

        public async Task<IEnumerable<CarDto>> GetAllAsync(int pageSize, int pageNumber)
        {

            var cars = await _carRepository.GetPaginatedAsync(pageNumber, pageSize);

            return cars.Select(x => new CarDto
            {
                Id = x.Id,
                Brand = x.Brand.Name,
                Model = x.Model.Name,
                Engine = x.Engine.Name,
                Owner = $"{ x.Owner.FirstName} {x.Owner.LastName}"
            })
            .ToList();
        }

        public async Task<IEnumerable<CarDto>> GetAllAsync()
        {

            //return await _garageContext.Car
            //    .OrderByDescending(x => x.CreateDate)
            //    .Select(x =>
            //    new CarDto
            //    {
            //        Id = x.Id,
            //        Brand = x.Brand.Name,
            //        Model = x.Model.Name,
            //        Engine = x.Engine.Name,
            //        Owner = $"{ x.Owner.FirstName} {x.Owner.LastName}",
            //        RegNum = x.PlateNumber,
            //        Phone = x.Phone,
            //        DueDateTechService = x.TechnicalCheck.HasValue ? x.TechnicalCheck.Value.ToShortDateString() : "",
            //        LastOilChange = x.LastOilChange.ToShortDateString()
            //    })
            //    .ToListAsync();
            const int numberRepairsToTake = 3;
            string carId = "";
            var cars = await _carRepository.GetPaginatedAsync(0, 0);
            Dictionary<string, int> repairCountDictionary = await _repairRepository.GetRepairsCountDictionaryByListAsync(cars.Select(x => x.Id).ToArray());
            Dictionary<string, List<Repair>> recentRepairs = await _repairRepository.GetRecentCarRepairsDictinaryByCarListAsync(numberRepairsToTake, repairCountDictionary.Where(x => x.Value > 0).Select(x => x.Key).ToArray());
            return cars.Select(x =>
               new CarDto
               {
                   Id = x.Id,
                   Brand = x.Brand.Name,
                   Model = x.Model.Name,
                   Engine = x.Engine.Name,
                   Owner = x.Owner == null ? "" : $"{ x.Owner.FirstName} {x.Owner.LastName}",
                   RegNum = x.PlateNumber,
                   Phone = x.Phone,
                   DueDateTechService = x.TechnicalCheck.HasValue ? x.TechnicalCheck.Value.ToShortDateString() : "",
                   LastOilChange = x.LastOilChange.ToShortDateString(),
                   RepairCount = repairCountDictionary.TryGetValue(x.Id, out int repairCount) ? repairCount : 0,
                   RecentRepairs = recentRepairs.TryGetValue(x.Id,out List<Repair> repairs) ? repairs.ToArray() : null
               })
                .ToList();
        }

        public async Task<CarDto> GetById(string carId)
        {
            var car = await _carRepository.GetByIdAsync(carId);
            return await Task.FromResult(new CarDto
            {
                Id = car.Id,
                Brand = car.Brand.Name,
                BrandId = car.BrandId,
                Model = car.Model.Name,
                ModelId = car.ModelId,
                Engine = car.Engine.Name,
                EngineId = car.EngineId,
                Owner = car.Owner != null ? "{ car.Owner.FirstName} {car.Owner.LastName}" : null,
                OwnerId = car.OwnerId,
                RegNum = car.PlateNumber,
                Phone = car.Phone,
                DueDateTechService = car.TechnicalCheck.HasValue ? car.TechnicalCheck.Value.ToShortDateString() : "",
                LastOilChange = car.LastOilChange.ToShortDateString(),
                Year = car.Year,
                KilometerCounter = car.KilometerCounter,
                TechnicalService = car.TechnicalCheck.HasValue ? car.TechnicalCheck.Value.ToShortDateString() : "",
            });
            //await _garageContext.Car
            //car.Select(x =>
            //new CarDto
            //{
            //    Id = x.Id,
            //    Brand = x.Brand.Name,
            //    BrandId = x.BrandId,
            //    Model = x.Model.Name,
            //    ModelId = x.ModelId,
            //    Engine = x.Engine.Name,
            //    EngineId = x.EngineId,
            //    Owner = x.Owner != null ? "{ x.Owner.FirstName} {x.Owner.LastName}" : null,
            //    OwnerId = x.OwnerId,
            //    RegNum = x.PlateNumber,
            //    Phone = x.Phone,
            //    DueDateTechService = x.TechnicalCheck.HasValue ? x.TechnicalCheck.Value.ToShortDateString() : "",
            //    LastOilChange = x.LastOilChange.ToShortDateString(),
            //    Year = x.Year,
            //    KilometerCounter = x.KilometerCounter,
            //    TechnicalService = x.TechnicalCheck.HasValue ? x.TechnicalCheck.Value.ToShortDateString() : "",
            //})
            //.SingleOrDefaultAsync(x => x.Id == carId);
        }

        public async Task Update(CarAddDto carAddDto, string carId)
        {
            //var carEntitie = await _garageContext
            //    .Car
            //    .SingleOrDefaultAsync(x => x.Id == carId);
            var carEntitie = await _carRepository.GetByIdAsync(carId);
            carEntitie.BrandId = carAddDto.BrandId;
            carEntitie.EngineId = carAddDto.EngineId;
            carEntitie.ModelId = carAddDto.ModelId;
            carEntitie.OwnerId = carAddDto.OwnerId;
            carEntitie.KilometerCounter = carAddDto.KilometerCounter;
            carEntitie.PlateNumber = carAddDto.PlateNumber;
            carEntitie.Phone = carAddDto.Phone;
            carEntitie.TechnicalCheck = carAddDto.TechnicalCheck;
            carEntitie.Year = carAddDto.Year;
            await _carRepository.UpdateAsync(carEntitie);
        }
    }
}
