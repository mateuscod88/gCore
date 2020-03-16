using System;
using System.Collections.Generic;
using System.Text;

namespace GarageServices.RepairService.Dto
{
    public class RepairDto
    {
        public string Id {get;set;}
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Note { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string PlateNumber { get; set; }
        public string Engine { get; set; }
    }
}
