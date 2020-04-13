using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Entities
{
    public class Repair : IBaseEntite
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Note { get; set; }
        public DateTime RepairDate { get; set; }
        public string CarId { get; set; }
        public Car Car { get; set; }
        public DateTime CreateDate { get; set; }
        public string KilometerCounter { get; set; }
    }
}
