//using Newtonsoft.Json;
//using System;
//using System.Collections.Generic;
//using System.IO;
//using System.Text;
//using PrzegladarkaTest;
//using GaragePersistent.Entities;
//using Microsoft.EntityFrameworkCore;
//using Microsoft.Extensions.DependencyInjection;

//namespace GaragePersistent.Helper
//{
//    public class DataGeneratorJson
//    {
//        public void GetCars(IServiceProvider serviceProvider)
//        {
//            var json = "";
//            using (StreamReader outputFile = new StreamReader(@"E:\gCore\gCore\GaragePersistent\Seed\ModelList\WriteLines2ReadyToWriteToDb.txt"))
//            {
//                json = outputFile.ReadToEnd();
//            }
//            var output = JsonConvert.DeserializeObject<List<PrzegladarkaTest.Car>>(json);
//            List<CarBrand> brands = new List<CarBrand>();
//            List<GaragePersistent.Entities.CarModel> models = new List<GaragePersistent.Entities.CarModel>();
//            List<GaragePersistent.Entities.CarEngine> engines = new List<GaragePersistent.Entities.CarEngine>();

//            foreach(var car in output)
//            {
//                foreach (var brand in car.Brands)
//                {

//                    if (brand.Models == null)
//                    {
//                        continue;
//                    }
//                    CarBrand brandEntitie = new CarBrand();
//                    string brandId = Guid.NewGuid().ToString();
//                    brandEntitie.Id = brandId;
//                    brandEntitie.Name = brand.Name;
//                    brandEntitie.CreateDate = DateTime.Now;
//                    brands.Add(brandEntitie);
                    
//                    foreach (var model in brand.Models)
//                    {
//                        var modelEntitie = new GaragePersistent.Entities.CarModel();
//                        var modelId = Guid.NewGuid().ToString();
//                        modelEntitie.Id = modelId;
//                        modelEntitie.Name = model.Name;
//                        modelEntitie.DateFrom = model.DateFrom;
//                        modelEntitie.DateTo = model.DateTo;
//                        modelEntitie.CreateDate = DateTime.Now;
//                        modelEntitie.CarBrandId = brandId;
//                        models.Add(modelEntitie);
//                        foreach (var engine in model.Engines)
//                        {
//                            var engineEntitie = new GaragePersistent.Entities.CarEngine();
//                            var engineId = Guid.NewGuid().ToString();
//                            engineEntitie.Id = engineId;
//                            engineEntitie.Name = engine.Name;
//                            engineEntitie.DateFrom = engine.DateFrom;
//                            engineEntitie.DatoTo = engine.DatoTo;
//                            engineEntitie.CarModelId = modelId;
//                            engineEntitie.Code = engine.Code;
//                            engineEntitie.Capacity = engine.Capacity;
//                            engineEntitie.BodyType = engine.BodyType;
//                            engineEntitie.HorsePower = engine.HorsePower;
//                            engineEntitie.KWPower = engine.KWPower;
//                            engineEntitie.CreateDate = DateTime.Now;
//                            engines.Add(engineEntitie);
//                        }

//                    }
//                }
//            }
            
//            using (var context = new GaragePersistent.Context.GarageContext(serviceProvider.GetRequiredService<DbContextOptions<GaragePersistent.Context.GarageContext>>()))

//            {
//                context.CarBrand.AddRange(brands);
//                context.CarModel.AddRange(models);
//                context.CarEngine.AddRange(engines);
//                context.SaveChanges();
//            }

//        }
//    }
//}
