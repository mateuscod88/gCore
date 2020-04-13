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
        public string Code { get; internal set; }
        public string DateFrom { get; internal set; }
        public string DatoTo { get; internal set; }
        public string Capacity { get; internal set; }
        public string HorsePower { get; internal set; }
        public string KWPower { get; internal set; }
        public string BodyType { get; internal set; }

    }
}