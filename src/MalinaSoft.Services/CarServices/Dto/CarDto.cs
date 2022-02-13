using GaragePersistent.Entities;

namespace GarageServices.CarServices.Dto
{
    public class CarDto
    {
        public string Id { get; set; }
        public string Brand { get; set; }
        public string BrandId { get; set; }
        public string Model { get; set; }
        public string ModelId { get; set; }
        public string Engine { get; set; }
        public string EngineId { get; set; }
        public string Owner { get; set; }
        public string RegNum { get; set; }
        public string Phone { get; set; }
        public string DueDateTechService { get; set; }
        public string LastOilChange { get; set; }
        public string Year { get; set; }
        public string KilometerCounter { get; set; }
        public string TechnicalService { get; set; }
        public string OwnerId { get; set; }
        public int RepairCount { get; internal set; }
        public Repair[] RecentRepairs { get; internal set; }
    }
}
