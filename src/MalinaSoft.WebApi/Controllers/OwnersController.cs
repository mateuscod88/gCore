using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarageServices.OwnerServices.Interface;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GarazMechanicCore.Controllers
{
    public class OwnersController : Controller
    {
        private IOwnerService _ownerService;
        public OwnersController(IOwnerService ownerService)
        {
            _ownerService = ownerService;
        }
        
        [Route("Owners")]
        [HttpGet]
        public async Task<IEnumerable<object>> GetAll()
        {
            return await _ownerService.GetAllAsync();
        }
    }
}
