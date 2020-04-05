using GaragePersistent.Context;
using GarageServices.BaseServices.Interfaces;
using GarageServices.OwnerServices.Dto;
using GarageServices.OwnerServices.Interface;
using System;
using System.Collections.Generic;
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

        public Task<IEnumerable<OwnerDto>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task Update(OwnerDto updated)
        {
            throw new NotImplementedException();
        }
    }
}
