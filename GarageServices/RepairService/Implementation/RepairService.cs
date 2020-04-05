using GaragePersistent.Context;
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

        public Task Add(RepairDto added)
        {
            throw new NotImplementedException();
        }

        public Task Delete(string id)
        {
            throw new NotImplementedException();
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
                    Date = x.RepairDate,
                    Engine = x.Car.Engine.Name,
                    PlateNumber = x.Car.PlateNumber
                })
                .Skip(pageNumber * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }

        public Task<IEnumerable<RepairDto>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        

        public Task Update(RepairDto updated)
        {
            throw new NotImplementedException();
        }
    }
}
