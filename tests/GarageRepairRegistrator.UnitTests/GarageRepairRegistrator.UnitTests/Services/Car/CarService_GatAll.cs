using GarageServices.CarServices.Implementation;
using GarageServices.CarServices.Interface;
using MalinaSoft.GarageRepairRegistrator.Interfaces.Repositories;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace GarageRepairRegistrator.UnitTests.Services.Car
{
    public class CarService_GatAll
    {
        public CarService_GatAll()
        {

        }

        //Method_Scenario_ExpectedBehaviour
        [Fact]
        public async Task GetAll_FirstPageWithTenItems_RetursTenItems()
        {
            //Arrange
            int pageSize = 10;
            int pageNumber = 0;
            //Zrobic Bogusia
            IEnumerable<GaragePersistent.Entities.Car> cars = new List<GaragePersistent.Entities.Car>
            {
            new GaragePersistent.Entities.Car{Brand = new GaragePersistent.Entities.CarBrand(),Model = new GaragePersistent.Entities.CarModel(),Engine = new GaragePersistent.Entities.CarEngine(),Owner = new GaragePersistent.Entities.CarOwner()},
            new GaragePersistent.Entities.Car{Brand = new GaragePersistent.Entities.CarBrand(),Model = new GaragePersistent.Entities.CarModel(),Engine = new GaragePersistent.Entities.CarEngine(),Owner = new GaragePersistent.Entities.CarOwner()},
            new GaragePersistent.Entities.Car{Brand = new GaragePersistent.Entities.CarBrand(),Model = new GaragePersistent.Entities.CarModel(),Engine = new GaragePersistent.Entities.CarEngine(),Owner = new GaragePersistent.Entities.CarOwner()},
            };

            Mock<ICarRepository> carRepository = new Mock<ICarRepository>();
            Mock<IRepairRepository> repairRepository = new Mock<IRepairRepository>();
            carRepository.Setup(x => x.GetPaginatedAsync(pageNumber, pageSize)).Returns(Task.FromResult(cars));

            ICarService _uut = new CarService(carRepository.Object, repairRepository.Object);

            //Act
            var firstPageWithTenCars = await _uut.GetAllAsync(10, 0);
            //Assert
            Assert.NotEmpty(firstPageWithTenCars);
        }
    }
}
