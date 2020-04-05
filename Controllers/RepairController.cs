using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarageServices.RepairService.Interface;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GarazMechanicCore.Controllers
{
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
            return await _repairService.GetAllAsync(pageSize, pageNumber);
        }
    }
}
