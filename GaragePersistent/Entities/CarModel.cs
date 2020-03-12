using System.Collections.Generic;

namespace GaragePersistent.Entities
{
    public class CarModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string CarBrandId { get; set; }
        public CarBrand Brand { get; set; }
        public List<CarEngine> CarEngines { get; set; }
    }
}