using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarageServices.ModelServices.Interface;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GarazMechanicCore.Controllers
{
    [Route("api/[controller]")]
    public class ModelController : Controller
    {
        private ICarModelService _carModelService;
        public ModelController(ICarModelService carModelService)
        {
            _carModelService = carModelService;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("[action]")]
        public async Task<IEnumerable<object>> GetCarModelsByBrandId(string brandId)
        {
            var b = await _carModelService.GetCarModelsByBrandId(brandId);
            return b;
        }
        [HttpGet("[action]")]
        public async Task<IEnumerable<object>> GetAll ()
        {
            var brandId = "e298b7bf-7434-444c-8484-de427888c132";
            return await _carModelService.GetAllAsync();
        }
    }
}
