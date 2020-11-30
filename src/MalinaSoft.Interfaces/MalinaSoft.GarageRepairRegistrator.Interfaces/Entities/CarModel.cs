using System;
using System.Collections.Generic;

namespace GaragePersistent.Entities
{
    public class CarModel : IBaseEntite
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string DateTo { get; set; }
        public string DateFrom { get; set; }
        public string CarBrandId { get; set; }
        public CarBrand Brand { get; set; }
        public List<CarEngine> CarEngines { get; set; }
        public DateTime CreateDate { get; set; }

    }
}