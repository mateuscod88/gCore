using GaragePersistent.Context;
using GarageServices.BaseServices.Interfaces;
using GarageServices.OwnerServices.Dto;
using GarageServices.OwnerServices.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.OwnerServices.Implementation
{
    public class OwnerService : BaseContext, IOwnerService
    {
        public OwnerService(GarageContext garageContext) : base(garageContext)
        {
        }

        public Task Add(OwnerDto added)
        {
            throw new NotImplementedException();
        }

        public Task Delete(string id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<OwnerDto>> GetAllAsync(int pageSize, int pageNumber)
        {
            throw new NotImplementedException();
        }

        public async  Task<IEnumerable<OwnerDto>> GetAllAsync()
        {
            var owner = await _garageContext.CarOwner.Select(x => new OwnerDto { Id = x.Id, Name = $"{x.FirstName} {x.LastName}" }).ToListAsync();
            return new List<OwnerDto> { new OwnerDto {Id = "1",Name = "Mateo" } };
        }

        public Task Update(OwnerDto updated)
        {
            throw new NotImplementedException();
        }
    }
}
