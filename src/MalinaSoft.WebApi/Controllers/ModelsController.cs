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
    public class ModelsController : Controller
    {
        private ICarModelService _carModelService;
        public ModelsController(ICarModelService carModelService)
        {
            _carModelService = carModelService;
        }
        
        [Route("Brands/{brandId}/Models")]
        [Route("Models")]
        [HttpGet]
        public async Task<IEnumerable<object>> GetCarModelsByBrandId(string brandId)
        {
            var b = await _carModelService.GetCarModelsByBrandId(brandId);
            return b;
        }

        [Route("Models")]
        [HttpGet]
        public async Task<IEnumerable<object>> GetAll ()
        {
            return await _carModelService.GetAllAsync();
        }
    }
}
