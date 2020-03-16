using GarageServices.RepairService.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.RepairService.Interface
{
    public interface IRepairService
    {
        Task<List<RepairDto>> GetByPageNumberAndSize(int pageNumber, int pageSize);
    }
}
