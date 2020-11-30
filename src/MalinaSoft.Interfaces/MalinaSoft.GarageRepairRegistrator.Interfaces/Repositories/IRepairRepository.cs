using GaragePersistent.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MalinaSoft.GarageRepairRegistrator.Interfaces.Repositories
{
    public interface IRepairRepository : IBaseRepository<Repair>
    {
        Task<List<Repair>> GetCarRepairsByCarId(string carId);
    }
}
