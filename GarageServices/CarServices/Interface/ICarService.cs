using GarageServices.CarServices.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.CarServices.Interface
{
    public interface ICarService
    {
        Task Add(CarAddDto carAddDto);
        Task<IEnumerable<CarDto>> GetAllAsync(int pageSize, int pageNumber);
    }
}
