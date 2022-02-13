using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarageServices.BrandServices.Interface;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GarazMechanicCore.Controllers
{
    public class BrandsController : Controller
    {
        private IBrandService _brandService;
        public BrandsController(IBrandService brandService)
        {
            _brandService = brandService;
        }

        [Route("Brands")]
        [HttpGet]
        public async Task<IEnumerable<object>> GetAll()
        {
            return await _brandService.GetAllAsync();
        }
    }
}
