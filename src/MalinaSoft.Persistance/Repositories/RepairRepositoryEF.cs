using GaragePersistent.Context;
using GaragePersistent.Entities;
using MalinaSoft.GarageRepairRegistrator.Interfaces.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalinaSoft.GarageRepairRegistrator.Persistance.Repositories
{
    public class RepairRepositoryEF : IRepairRepository
    {
        private bool disposed = false;
        private GarageContext _garageContext;

        public RepairRepositoryEF(GarageContext garageContext)
        {
            _garageContext = garageContext;
        }
        public async Task<ICollection<Repair>> GetPageAsync(int pageNumber, int pageSize)
        {
            pageSize = pageSize > 0 ? pageSize : 10;
            return await _garageContext.Repair
                .Include(x => x.Car.Brand)
                .Include(x => x.Car.Model)
                .Include(x => x.Car.Owner)
                .Include(x => x.Car.Engine)
                .Skip(pageNumber * pageSize)
                .Take(pageSize)
                .ToListAsync();
        }
        public async Task AddAsync(Repair entity)
        {
            await _garageContext.Repair.AddAsync(entity);
            await _garageContext.SaveChangesAsync();
        }

        public Task DeleteAsync(Repair entity)
        {
            throw new NotImplementedException();
        }

        public Task<Repair> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Repair> GetByIdAsync(string id)
        {
            return await _garageContext.Repair.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IList<Repair>> GetCarRepairsByCarId(string carId)
        {
            return await _garageContext.Repair
                .Where(x => x.CarId == carId)
                .ToListAsync();
        }

        public Task<IReadOnlyList<Repair>> ListAllAsync()
        {
            throw new NotImplementedException();
        }

        public async Task UpdateAsync(Repair repair)
        {

            _garageContext.Repair.Update(repair);
            await _garageContext.SaveChangesAsync();
        }

        public async Task UpdateManyAsync(IEnumerable<Repair> entities)
        {
            _garageContext.Repair.UpdateRange(entities);
            await _garageContext.SaveChangesAsync();
        }

        Task<List<Repair>> IRepairRepository.GetCarRepairsByCarId(string carId)
        {
            throw new NotImplementedException();
        }
    }
}
