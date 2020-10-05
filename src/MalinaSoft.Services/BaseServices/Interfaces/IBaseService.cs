using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.BaseServices.Interfaces
{
    public interface IBaseService<T> where T: class
    {
        Task Add(T added);
        Task Update(T updated);
        Task Delete(string id);
        Task<IEnumerable<T>> GetAllAsync(int pageSize, int pageNumber);
        Task<IEnumerable<T>> GetAllAsync();

    }
}
