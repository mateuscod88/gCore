using System;
using System.Collections.Generic;
using System.Text;

namespace GarageServices.CarServices.Dto
{
    public class CarAddDto
    {
        public string BrandId { get;  set; }
        public string EngineId { get;  set; }
        public string ModelId { get;  set; }
        public string OwnerId { get;  set; }
        public string KilometerCounter { get;  set; }
        public string PlateNumber { get;  set; }
        public string Phone { get;  set; }
        public DateTime? TechnicalCheck { get;  set; }
        public string Year { get;  set; }

    }
}
