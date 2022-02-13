using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarageServices.RepairService.Dto;
using GarageServices.RepairService.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GarazMechanicCore.Controllers
{

    public class RepairsController : Controller
    {
        private IRepairService _repairService;
        private readonly ILogger _logger;

        public RepairsController(IRepairService repairService, ILogger<RepairsController> logger)
        {
            _repairService = repairService ?? throw new ArgumentNullException();
            _logger = logger ?? throw new ArgumentNullException();
        }
        // GET: /<controller>/
        
        [Route("Repairs")]
        [HttpGet]
        public async Task<IEnumerable<object>> GetAll(int? pageSize, int? pageNumber)
        {
            return await _repairService.GetAllAsync();
        }
        
        [Route("Repairs/{repairId}")]
        [HttpGet]
        public async Task<object> GetById(string repairId)
        {
            return await _repairService.GetById(repairId);
        }
        
        [Route("Repairs")]
        [HttpPost]
        public async Task<object> Add([FromBody]RepairDto repairDto)
        {
            try
            {
                string repairId = await _repairService.Add(repairDto);
                return Created($"Repairs{repairId}",repairId);
            }
            catch(Exception e)
            {
                return StatusCode(500, "Create Failed");
            }

        }
        
        [Route("Repairs/{id}")]
        [HttpPut]
        public async Task<object> Update([FromBody]RepairDto carAddDto, string id)
        {
            try
            {
                await _repairService.Update(carAddDto, id);
                return Ok();

            }
            catch (Exception e)
            {
                _logger.LogError(e.Message);
                return StatusCode(500,"Üpdate Failed");
            }
        }

        [Route("Repairs/{id}")]
        [HttpDelete]
        public async Task<object> Delete(string id)
        {
            await _repairService.Delete(id);
            return NoContent();
        }

    }
}
