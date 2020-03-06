using System.Collections.Generic;

namespace GaragePersistent.Entities
{
    public class CarBrand
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public List<CarModel> CarModels { get; set; }
    }
}