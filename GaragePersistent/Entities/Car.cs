using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Entities
{
    public class Car : IBaseEntite
    {
        public string Id { get; set; }
        public string BrandId { get; set; }
        public CarBrand Brand { get; set; }
        public string ModelId { get; set; }
        public CarModel Model { get; set; }
        public string EngineId { get; set; }
        public CarEngine  Engine{ get; set; }
        public string OwnerId { get; set; }
        public CarOwner Owner { get; set; }
        public DateTime TechnicalCheck { get; set; }
        public string PlateNumber { get; set; }
        public string KilometerCounter { get; set; }
        public string Year { get; set; }
        public string Phone { get; set; }
        public List<Repair> Repairs { get; set; }
        public DateTime CreateDate { get; set; }
    }
}
