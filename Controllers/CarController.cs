﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GarageServices.CarServices.Dto;
using GarageServices.CarServices.Interface;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GarazMechanicCore.Controllers
{
    [Route("api/[controller]")]
    public class CarController : Controller
    {
        private readonly ICarService _carService;
        public CarController(ICarService carService)
        {
            _carService = carService;
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("[action]")]
        public async Task<object> GetCarById(string carId)
        {
            CarDto car = await _carService.GetById(carId);
            return car;
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<object>> GetAll(int pageSize, int pageNumber)
        {
            var cars = await _carService.GetAllAsync();
            return cars;
            //return new List<CarDto> { new CarDto
            //{
            //    Id = "1",
            //    Brand = "Audi",
            //    Model = "A4",
            //    Engine = "1.9TDI",
            //    Owner = "Mateusz Malinowski",
            //    OwnerId = "1",
            //    BrandId = "1",
            //    DueDateTechService = "1.1.2020",
            //    EngineId = "1",
            //    KilometerCounter = "222222",
            //    LastOilChange = "1.1.2020",
            //    ModelId = "2",
            //    Phone ="1123131",
            //     RegNum = "BBI2121",
            //     TechnicalService = "1.1.2020",
            //     Year = "2009"
            //} 
        //};
    }
        [HttpPost("[action]")]
        public async Task<object> Add([FromBody]CarAddDto carAddDto)
        {
            string id = await _carService.Add(carAddDto);
            return id;
        }
        [HttpPut("[action]")]
        public async Task<object> Update([FromBody]CarAddDto carAddDto,[FromQuery] string id)
        {
            await _carService.Update(carAddDto,id);
            return null;
        }
    }

}
