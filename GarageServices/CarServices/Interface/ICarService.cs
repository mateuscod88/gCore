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

        Task Update(CarAddDto carAddDto);

        Task Delete(string carId);

        Task<IEnumerable<CarDto>> GetAllAsync(int pageSize, int pageNumber);

        Task<IEnumerable<CarDto>> GetAllAsync();

    }
}
