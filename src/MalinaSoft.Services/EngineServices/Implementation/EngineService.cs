using GaragePersistent.Context;
using GarageServices.BaseServices.Interfaces;
using GarageServices.EngineServices.Dto;
using GarageServices.EngineServices.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async  Task<IEnumerable<CarEngineDto>> GetEnginesByBrandIdModelId(string brandId, string modelId)
        {
            var e = await _garageContext
                .CarEngine
                .Where(x => x.CarModelId == modelId)
                .Select(x => new CarEngineDto { Id = x.Id, Name = $"{x.Name}({x.Code}) {x.HorsePower}KM({x.KWPower}KW) {x.DateFrom}-{x.DatoTo}" })
                .OrderBy(x => x.Name)
                .ToListAsync();
            return e;
        }

        public Task Update(CarEngineDto updated)
        {
            throw new NotImplementedException();
        }
    }
}
