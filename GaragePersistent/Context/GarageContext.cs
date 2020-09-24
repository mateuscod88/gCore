using GaragePersistent.Entities;
using GaragePersistent.Entities.Mappings;
using GaragePersistent.Helper;
using GaragePersistent.Seed;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
namespace GaragePersistent.Context
{
    public class GarageContext : DbContext
    {
        private readonly string _connectionString;
        public IConfiguration Configuration { get; }

        public GarageContext(string connectionString)
        {
            _connectionString = connectionString;
        }
        public GarageContext()
        {
        }
        public GarageContext(DbContextOptions<GarageContext> options)
        : base(options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                if (!string.IsNullOrEmpty(_connectionString))
                {
                    optionsBuilder.UseSqlServer(_connectionString);
                }

                else
                {
                    var config = new ConfigurationBuilder()
                        .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
                        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                        .Build();
                    var configRoot = config.GetSection("ConnectionString:GarageContext");
                    if (configRoot == null)
                    {
                        throw new ArgumentNullException("Configuration empty");
                    }
                    var connectionString = configRoot.Value;
                    optionsBuilder.UseSqlServer(connectionString);
                }
            }

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
        }
    }
}
