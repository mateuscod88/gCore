using GaragePersistent.Context;
using GaragePersistent.Entities;
using MalinaSoft.GarageRepairRegistrator.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace MalinaSoft.GarageRepairRegistrator.Persistance.Repositories
{
    public class CarRepositoryEF : ICarRepository, IDisposable
    {
        private bool disposed = false;
        private GarageContext _garageContext;

        public CarRepositoryEF(GarageContext garageContext)
        {
            _garageContext = garageContext;
        }

        public async Task AddAsync(Car carEntity)
        {
            await _garageContext.AddAsync(carEntity);
            await _garageContext.SaveChangesAsync();
        }

        public Task DeleteAsync(Car entity)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public Task<Car> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Car> GetByIdAsync(string id)
        {
            return await _garageContext.Car
                .Include(x => x.Brand)
                .Include(x => x.Model)
                .Include(x => x.Engine)
                .Include(x => x.Owner)
                .FirstAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<Car>> GetPaginatedAsync(int pageNumber, int pageSize)
        {
            //var c = _garageContext.Car
            //   .OrderByDescending(x => x.CreateDate);

            //IEnumerable<Car> cars = c.AsEnumerable();
            //var takecars = cars.Take(10);

            //IQueryable<Car> queryCars = c.AsQueryable();
            //var takeQuery = queryCars.Take(10);
            pageSize = pageSize == 0 ? 10 : pageSize;

            return await _garageContext.Car
               .Include(x => x.Brand)
               .Include(x => x.Engine)
               .Include(x => x.Model)
               .Include(x => x.Owner)
               .OrderByDescending(x => x.CreateDate)
               .Skip(0)
               .Take(pageSize)
               .ToListAsync();
        }

        public Task<IReadOnlyList<Car>> ListAllAsync()
        {
            throw new NotImplementedException();
        }

        public async Task UpdateAsync(Car entity)
        {
            _garageContext.Car.Update(entity);
            await _garageContext.SaveChangesAsync();
        }

        public Task UpdateManyAsync(IEnumerable<Car> entities)
        {
            throw new NotImplementedException();
        }

        private void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _garageContext.Dispose();
                }
            }
            this.disposed = true;
        }


    }
}
