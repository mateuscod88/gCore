using GaragePersistent.Entities;
using GaragePersistent.Entities.Mappings;
using GaragePersistent.Seed;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Context
{
    public class GarageContext : DbContext
    {
        private readonly string _connectionString;
        //public GarageContext(string connectionString)
        //{
        //    _connectionString = connectionString;
        //}
        public GarageContext(DbContextOptions<GarageContext> options)
        : base(options)
        {

        }

        public virtual DbSet<Car> Car { get; set; }
        public virtual DbSet<CarBrand> CarBrand { get; set; }
        public virtual DbSet<CarModel> CarModel { get; set; }
        public virtual DbSet<CarEngine> CarEngine { get; set; }
        public virtual DbSet<CarOwner> CarOwner { get; set; }
        public virtual DbSet<Repair> Repair { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CarMappings());
            modelBuilder.ApplyConfiguration(new CarModelMappings());
            modelBuilder.ApplyConfiguration(new CarBrandMappings());
            modelBuilder.ApplyConfiguration(new CarEngineMappings());
            modelBuilder.ApplyConfiguration(new CarOwnerMappings());
            modelBuilder.ApplyConfiguration(new RepairMappings());

            modelBuilder.Seed<Car>(CarSeed.GetAll());
            modelBuilder.Seed<CarBrand>(BrandSeed.GetAll());
            modelBuilder.Seed<CarModel>(ModelSeed.GetAll());
            modelBuilder.Seed<CarEngine>(EngineSeed.GetAll());



        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //optionsBuilder.UseNpgsql(_connectionString);
            }
        }
        



    }
}
