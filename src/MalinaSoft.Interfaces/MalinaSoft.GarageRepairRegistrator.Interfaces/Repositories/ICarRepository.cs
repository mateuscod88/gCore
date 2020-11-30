using GaragePersistent.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MalinaSoft.GarageRepairRegistrator.Interfaces.Repositories
{
    public interface ICarRepository : IBaseRepository<Car>
    {
        Task<IEnumerable<Car>> GetPaginatedAsync(int pageNumber, int pageSize);
    }
}
