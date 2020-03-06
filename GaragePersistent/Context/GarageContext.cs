using GaragePersistent.Entities;
using GaragePersistent.Entities.Mappings;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Context
{
    public class GarageContext : DbContext
    {
        public virtual DbSet<Car> Car { get; set; }
        public virtual DbSet<CarBrand> CarBrand { get; set; }
        public virtual DbSet<CarModel> CarModel { get; set; }
        public virtual DbSet<CarEngine> CarEngine { get; set; }
        public virtual DbSet<CarOwner> CarOwner { get; set; }
        public virtual DbSet<Repair> Repair { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CarMappings());
        }

    }
}
