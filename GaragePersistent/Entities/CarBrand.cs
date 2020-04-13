using System;
using System.Collections.Generic;

namespace GaragePersistent.Entities
{
    public class CarBrand : IBaseEntite
    {
        public string Id { get; set; }
        public string Name { get; set; }
        
        public List<CarModel> CarModels { get; set; }
        public DateTime CreateDate { get; set; }
    }
}