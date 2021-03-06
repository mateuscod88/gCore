﻿// <auto-generated />
using System;
using GaragePersistent.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace GaragePersistent.Migrations
{
    [DbContext(typeof(GarageContext))]
    [Migration("20200530170825_repairIsDeletedColumn_Add")]
    partial class repairIsDeletedColumn_Add
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("GaragePersistent.Entities.Car", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BrandId");

                    b.Property<DateTime>("CreateDate");

                    b.Property<string>("EngineId");

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("KilometerCounter");

                    b.Property<DateTime>("LastOilChange");

                    b.Property<string>("ModelId");

                    b.Property<string>("OwnerId");

                    b.Property<string>("Phone");

                    b.Property<string>("PlateNumber");

                    b.Property<DateTime>("TechnicalCheck");

                    b.Property<string>("Year");

                    b.HasKey("Id");

                    b.HasIndex("BrandId");

                    b.HasIndex("EngineId");

                    b.HasIndex("ModelId");

                    b.HasIndex("OwnerId");

                    b.ToTable("Car");
                });

            modelBuilder.Entity("GaragePersistent.Entities.CarBrand", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreateDate");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("CarBrand");
                });

            modelBuilder.Entity("GaragePersistent.Entities.CarEngine", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BodyType");

                    b.Property<string>("Capacity");

                    b.Property<string>("CarModelId");

                    b.Property<string>("Code");

                    b.Property<DateTime>("CreateDate");

                    b.Property<string>("DateFrom");

                    b.Property<string>("DatoTo");

                    b.Property<string>("HorsePower");

                    b.Property<string>("KWPower");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("CarModelId");

                    b.ToTable("CarEngine");
                });

            modelBuilder.Entity("GaragePersistent.Entities.CarModel", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CarBrandId");

                    b.Property<DateTime>("CreateDate");

                    b.Property<string>("DateFrom");

                    b.Property<string>("DateTo");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("CarBrandId");

                    b.ToTable("CarModel");
                });

            modelBuilder.Entity("GaragePersistent.Entities.CarOwner", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreateDate");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<string>("Phone");

                    b.HasKey("Id");

                    b.ToTable("CarOwner");
                });

            modelBuilder.Entity("GaragePersistent.Entities.Repair", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CarId");

                    b.Property<DateTime>("CreateDate");

                    b.Property<bool>("IsDeleted");

                    b.Property<string>("KilometerCounter");

                    b.Property<string>("Name");

                    b.Property<string>("Note");

                    b.Property<DateTime>("RepairDate");

                    b.HasKey("Id");

                    b.HasIndex("CarId");

                    b.ToTable("Repair");
                });

            modelBuilder.Entity("GaragePersistent.Entities.Car", b =>
                {
                    b.HasOne("GaragePersistent.Entities.CarBrand", "Brand")
                        .WithMany()
                        .HasForeignKey("BrandId");

                    b.HasOne("GaragePersistent.Entities.CarEngine", "Engine")
                        .WithMany()
                        .HasForeignKey("EngineId");

                    b.HasOne("GaragePersistent.Entities.CarModel", "Model")
                        .WithMany()
                        .HasForeignKey("ModelId");

                    b.HasOne("GaragePersistent.Entities.CarOwner", "Owner")
                        .WithMany()
                        .HasForeignKey("OwnerId");
                });

            modelBuilder.Entity("GaragePersistent.Entities.CarEngine", b =>
                {
                    b.HasOne("GaragePersistent.Entities.CarModel", "Model")
                        .WithMany("CarEngines")
                        .HasForeignKey("CarModelId");
                });

            modelBuilder.Entity("GaragePersistent.Entities.CarModel", b =>
                {
                    b.HasOne("GaragePersistent.Entities.CarBrand", "Brand")
                        .WithMany("CarModels")
                        .HasForeignKey("CarBrandId");
                });

            modelBuilder.Entity("GaragePersistent.Entities.Repair", b =>
                {
                    b.HasOne("GaragePersistent.Entities.Car", "Car")
                        .WithMany("Repairs")
                        .HasForeignKey("CarId");
                });
#pragma warning restore 612, 618
        }
    }
}
