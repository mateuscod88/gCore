using System;

namespace GaragePersistent.Entities
{
    public class CarOwner : IBaseEntite
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public DateTime CreateDate { get; set; }

    }
}