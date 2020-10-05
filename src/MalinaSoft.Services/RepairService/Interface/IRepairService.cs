using GaragePersistent.Entities;
using GarageServices.BaseServices.Interfaces;
using GarageServices.RepairService.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace GarageServices.RepairService.Interface
{
    public interface IRepairService : IBaseService<RepairDto>
    {
        Task<string> Add(RepairDto added);

        Task<RepairDto> GetById(string repairId);
        Task Update(RepairDto added,string repairId);

    }
}
