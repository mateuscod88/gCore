using GaragePersistent.Context;
using GarageServices.BaseServices.Interfaces;
using GarageServices.BrandServices.Dto;
using GarageServices.BrandServices.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.BrandServices.Implementation
{
    public class BrandService : BaseContext, IBrandService
    {
        public BrandService(GarageContext garageContext) : base(garageContext)
        {
        }

        public Task Add(CarBrandDto added)
        {
            throw new NotImplementedException();
        }

        public Task Delete(string id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<CarBrandDto>> GetAllAsync(int pageSize, int pageNumber)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<CarBrandDto>> GetAllAsync()
        {
            return await this._garageContext.CarBrand.Select(x => new CarBrandDto
            {
                Id = x.Id,
                Name = x.Name
            })
            .ToListAsync();
        }

        public Task Update(CarBrandDto updated)
        {
            throw new NotImplementedException();
        }
    }
}
