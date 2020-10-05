using GarageServices.BaseServices.Interfaces;
using GarageServices.ModelServices.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.ModelServices.Interface
{
    public interface ICarModelService : IBaseService<CarModelDto>
    {
        Task<IEnumerable<CarModelDto>> GetCarModelsByBrandId(string brandId);
    }
}
