using GaragePersistent.Entities;
using MalinaSoft.GarageRepairRegistrator.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MalinaSoft.GarageRepairRegistrator.Persistance.Repositories
{
    public class CarBrandRepositoryEF : ICarRepository
    {
        public Task<CarBrand> AddAsync(CarBrand entity)
        {
            throw new NotImplementedException();
        }

        public Task AddAsync(Car entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(CarBrand entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(Car entity)
        {
            throw new NotImplementedException();
        }

        public Task<CarBrand> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Car> GetByIdAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Car>> GetPaginatedAsync(int pageNumber, int pageSize)
        {
            throw new NotImplementedException();
        }

        public Task<IReadOnlyList<CarBrand>> ListAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(CarBrand entity)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(Car entity)
        {
            throw new NotImplementedException();
        }

        public Task UpdateManyAsync(IEnumerable<Car> entities)
        {
            throw new NotImplementedException();
        }

        Task<Car> IBaseRepository<Car>.GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        Task<IReadOnlyList<Car>> IBaseRepository<Car>.ListAllAsync()
        {
            throw new NotImplementedException();
        }
    }
}
