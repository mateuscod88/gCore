using GarageServices.CarServices.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.CarServices.Interface
{
    public interface ICarService
    {
        Task<string> Add(CarAddDto carAddDto);

        Task Update(CarAddDto carAddDto, string carId);

        Task Delete(string carId);

        Task<IEnumerable<CarDto>> GetAllAsync(int pageSize, int pageNumber);

        Task<IEnumerable<CarDto>> GetAllAsync();
        Task<CarDto> GetById(string carId);
    }
}
