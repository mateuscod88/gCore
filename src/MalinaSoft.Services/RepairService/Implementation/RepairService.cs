using GaragePersistent.Context;
using GaragePersistent.Entities;
using GarageServices.BaseServices.Interfaces;
using GarageServices.RepairService.Dto;
using GarageServices.RepairService.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.RepairService.Implementation
{
    public class RepairService : BaseContext, IRepairService
    {
        public RepairService(GarageContext garageContext) : base(garageContext)
        {
        }

        public async Task<string> Add(RepairDto added)
        {
            var repairEntitie = new Repair
            {
                Id = Guid.NewGuid().ToString(),
                Name = added.Name,
                CarId = added.CarId,
                CreateDate = DateTime.Now,
                Note = added.Note,
                RepairDate = DateTime.Parse(added.Date),
                KilometerCounter = added.Counter
            };
            await _garageContext.Repair.AddAsync(repairEntitie);
            await _garageContext.SaveChangesAsync();
            return repairEntitie.Id;
        }

        public async Task Delete(string id)
        {
            var repair = _garageContext.Repair.Single(x => x.Id == id);
            repair.IsDeleted = true;
            _garageContext.Repair.Update(repair);
            await _garageContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<RepairDto>> GetAllAsync(int pageSize, int pageNumber)
        {
            return await _garageContext.Repair
                .Select(x => new RepairDto
                {
                    Id = x.Id,
                    Brand = x.Car.Brand.Name,
                    Model = x.Car.Model.Name,
                    Name = x.Name,
                    Note = x.Note,
                    Date = x.RepairDate.ToShortDateString(),
                    Engine = x.Car.Engine.Name,
                    PlateNumber = x.Car.PlateNumber
                })
                .Skip(pageNumber * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public async Task<IEnumerable<RepairDto>> GetAllAsync()
        {
            return await _garageContext.Repair
                .OrderByDescending(x => x.CreateDate)
                .Select(x => new RepairDto
                {
                    Id = x.Id,
                    Brand = x.Car.Brand.Name,
                    Model = x.Car.Model.Name,
                    Name = x.Name,
                    Note = x.Note,
                    Date = x.RepairDate.ToShortDateString(),
                    Engine = x.Car.Engine.Name,
                    PlateNumber = x.Car.PlateNumber,
                    Counter = x.KilometerCounter,
                    CarId = x.CarId
                })
                .ToListAsync();
        }

        public async Task<RepairDto> GetById(string repairId)
        {
            return await _garageContext
                .Repair
                .Select(x => new RepairDto
                {
                    Id = x.Id,
                    Brand = x.Car.Brand.Name,
                    Model = x.Car.Model.Name,
                    Name = x.Name,
                    Note = x.Note,
                    Date = x.RepairDate.ToShortDateString(),
                    Engine = x.Car.Engine.Name,
                    PlateNumber = x.Car.PlateNumber,
                    Counter = x.KilometerCounter,
                    CarId = x.CarId
                })
                .SingleOrDefaultAsync(x => x.Id == repairId);
        }

        public Task Update(RepairDto updated)
        {
            throw new NotImplementedException();
        }

        public async Task Update(RepairDto added, string repairId)
        {

            var repairEntitie = await _garageContext.Repair.SingleOrDefaultAsync(x => x.Id == repairId);

            repairEntitie.Name = added.Name;
            repairEntitie.CreateDate = DateTime.Now;
            repairEntitie.Note = added.Note;
            repairEntitie.RepairDate = DateTime.Parse(added.Date);
            repairEntitie.KilometerCounter = added.Counter;

            _garageContext.Repair.Update(repairEntitie);
            await _garageContext.SaveChangesAsync();
        }

        Task IBaseService<RepairDto>.Add(RepairDto added)
        {
            throw new NotImplementedException();
        }
    }
}
