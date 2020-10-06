using GarageServices.CarServices.Implementation;
using GarageServices.CarServices.Interface;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;
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
        public void GetAll_FirstPageWithTenItems_RetursTenItems()
        {
            //Arrange
            Mock garageContextStub = 
            ICarService _uut = new CarService();
            //Act
            //Assert
            Assert.True(false);
        }
    }
}
