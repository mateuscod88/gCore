namespace GaragePersistent.Entities
{
    public class CarEngine
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string CarModelId { get; set; }
        public CarModel Model { get; set; }
    }
}