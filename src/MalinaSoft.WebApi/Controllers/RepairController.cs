using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarageServices.RepairService.Dto;
using GarageServices.RepairService.Interface;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GarazMechanicCore.Controllers
{
    [Route("api/[controller]")]

    public class RepairController : Controller
    {
        private IRepairService _repairService;
        public RepairController(IRepairService repairService)
        {
            _repairService = repairService;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("[action]")]
        public async Task<IEnumerable<object>> GetAll(int pageSize, int pageNumber)
        {
            return await _repairService.GetAllAsync();
        }
        [HttpGet("[action]")]
        public async Task<object> GetById(string repairId)
        {
            return await _repairService.GetById(repairId);
        }
        [HttpPost("[action]")]
        public async Task<string> Add([FromBody]RepairDto repairDto)
        {
            string repairId = await _repairService.Add(repairDto);

            return repairId;
        }
        [HttpPut("[action]")]
        public async Task<object> Update([FromBody]RepairDto carAddDto, [FromQuery] string id)
        {
            await _repairService.Update(carAddDto, id);
            return null;
        }
        [HttpDelete("[action]")]
        public async Task Delete(string id)
        {
            await _repairService.Delete(id);
        }

    }
}
