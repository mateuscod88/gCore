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
        Task<int> GetRepairsCountByCarId(string carId);
        Task<ICollection<Repair>> GetRecentCarRepairs(int numberRepairsToTake, string carId);
        Task<Dictionary<string, List<Repair>>> GetRecentCarRepairsDictinaryByCarListAsync(int numberRepairsToTake, string[] carIdList);
        Task<Dictionary<string, int>> GetRepairsCountDictionaryByListAsync(string[] carIdList);
    }
}
