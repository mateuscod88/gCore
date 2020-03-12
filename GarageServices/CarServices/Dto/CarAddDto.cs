using System;
using System.Collections.Generic;
using System.Text;

namespace GarageServices.CarServices.Dto
{
    public class CarAddDto
    {
        public string BrandId { get; internal set; }
        public string EngineId { get; internal set; }
        public string ModelId { get; internal set; }
        public string OwnerId { get; internal set; }
        public string KilometerCounter { get; internal set; }
        public string PlateNumber { get; internal set; }
        public string Phone { get; internal set; }
        public DateTime TechnicalCheck { get; internal set; }
        public string Year { get; internal set; }
    }
}
