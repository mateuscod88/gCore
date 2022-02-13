using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GarageServices.CarServices.Dto;
using GarageServices.CarServices.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GarazMechanicCore.Controllers
{
    public class CarsController : Controller
    {
        private readonly ICarService _carService;
        private readonly ILogger _logger;
        public CarsController(ICarService carService, ILogger<CarsController> logger)
        {
            _carService = carService;
            _logger = logger;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [Route("Cars/{carId}")]
        [HttpGet]
        public async Task<object> GetCarById(string carId)
        {
            CarDto car = await _carService.GetById(carId);
            return car;
        }

        [Route("Cars")]
        [HttpGet]
        public async Task<IEnumerable<object>> GetAll(int? pageSize, int? pageNumber)
        {
            var cars = await _carService.GetAllAsync();
            return cars;
        }
        [Route("Cars")]
        [HttpPost]
        public async Task<object> Add([FromBody] CarAddDto carAddDto)
        {
            try
            {
                string id = await _carService.Add(carAddDto);
                return id;
            }
            catch (Exception e)
            {
                _logger.LogError(e.Message, e);
                return StatusCode(500, "Internal server error");
            }
        }
        [Route("Cars")]
        [HttpPut]
        public async Task<object> Update([FromBody] CarAddDto carAddDto, [FromQuery] string id)
        {
            await _carService.Update(carAddDto, id);
            return null;
        }

        [Route("Cars/{id}")]
        [HttpDelete]
        public async Task Delete(string id)
        {
            await _carService.Delete(id);
        }
    }

}
