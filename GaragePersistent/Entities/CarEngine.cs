using System;

namespace GaragePersistent.Entities
{
    public class CarEngine : IBaseEntite
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string CarModelId { get; set; }
        public CarModel Model { get; set; }
        public DateTime CreateDate { get; set; }

    }
}