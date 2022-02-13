using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarageServices.EngineServices.Interface;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GarazMechanicCore.Controllers
{

    public class EnginesController : Controller
    {
        private readonly IEngineService _engineService;

        public EnginesController(IEngineService engineService)
        {
            _engineService = engineService;
        }
        
        [Route("Brands/{brandId}/Models/{modelId}/Engines")]
        [Route("Engines")]
        [HttpGet]
        public async Task<IEnumerable<object>> GetEnginesByBrandIdModelId(string brandId, string modelId)
        {
            return await _engineService.GetEnginesByBrandIdModelId(brandId,modelId);
        }
    }
}
