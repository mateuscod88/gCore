using GaragePersistent.Context;
using GarageServices.BaseServices.Interfaces;
using GarageServices.ModelServices.Dto;
using GarageServices.ModelServices.Interface;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.ModelServices.Implementation
{
    public class CarModelService : BaseContext, ICarModelService
    {
        public CarModelService(GarageContext garageContext) : base(garageContext)
        {
        }

        public Task Add(CarModelDto added)
        {
            throw new NotImplementedException();
        }

        public Task Delete(string id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<CarModelDto>> GetAllAsync(int pageSize, int pageNumber)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<CarModelDto>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task Update(CarModelDto updated)
        {
            throw new NotImplementedException();
        }
    }
}
