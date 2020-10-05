using GarageServices.BaseServices.Interfaces;
using GarageServices.EngineServices.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.EngineServices.Interface
{
    public interface IEngineService : IBaseService<CarEngineDto>
    {
        Task<IEnumerable<CarEngineDto>> GetEnginesByBrandIdModelId(string brandId, string modelId);
    }
}
