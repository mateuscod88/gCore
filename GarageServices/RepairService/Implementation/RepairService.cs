using GaragePersistent.Context;
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
    public class RepairService : IRepairService
    {
        private readonly GarageContext _garageContext;

        public RepairService(GarageContext garageContext)
        {
            _garageContext = garageContext;
        }

        public async Task<List<RepairDto>> GetByPageNumberAndSize(int pageNumber, int pageSize)
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
    }
}
