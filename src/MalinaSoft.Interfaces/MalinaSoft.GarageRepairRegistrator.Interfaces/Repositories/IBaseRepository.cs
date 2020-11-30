using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace MalinaSoft.GarageRepairRegistrator.Interfaces.Repositories
{
    public interface IBaseRepository<T> 
    {
        Task<T> GetByIdAsync(string id);
        Task<T> GetByIdAsync(int id);
        Task<IReadOnlyList<T>> ListAllAsync();
        Task AddAsync(T entity);
        Task UpdateAsync(T entity);
        Task UpdateManyAsync(IEnumerable<T> entities);
        Task DeleteAsync(T entity);
    }
}
