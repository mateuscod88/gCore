using GaragePersistent.Context;
using GarageServices.BaseServices.Interfaces;
using GarageServices.EngineServices.Dto;
using GarageServices.EngineServices.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.EngineServices.Implementation
{
    public class EngineService : BaseContext, IEngineService
    {
        public EngineService(GarageContext garageContext) : base(garageContext)
        {
           
        }
        public Task Add(CarEngineDto added)
        {
            
            throw new NotImplementedException();
        }

        public Task Delete(string id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<CarEngineDto>> GetAllAsync(int pageSize, int pageNumber)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<CarEngineDto>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task Update(CarEngineDto updated)
        {
            throw new NotImplementedException();
        }
    }
}
