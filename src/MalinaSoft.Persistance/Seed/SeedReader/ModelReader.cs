using GaragePersistent.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace GaragePersistent.Seed.SeedReader
{
    public class ModelReader
    {
        public IEnumerable<CarModel> GetModels(IServiceProvider serviceProvider)
        {
            List<CarModel> carModels = new List<CarModel>();
            string brandId = string.Empty;
            int startIndex = 0;

            var modelsFile = "E:\\gCore\\gCore\\GaragePersistent\\Seed\\ModelList\\Models.txt";
            var sr = File.ReadAllLines(modelsFile);
            using (var context = new GaragePersistent.Context.GarageContext(serviceProvider.GetRequiredService<DbContextOptions<GaragePersistent.Context.GarageContext>>()))
            {
                var modelName = string.Empty;
                for(int i = 0;i < sr.Length;i++)
                {
                    var isBrandName = sr[i].IndexOf("$$") >= 0;
                    if (isBrandName)
                    {
                        startIndex = i;
                        var brandName = sr[i];
                        brandName = brandName.Replace("\"", "");

                        brandName = brandName.Replace(@"\","");
                        brandName = brandName.Replace(",", "").Replace("$$", "");
                        var brand = context.CarBrand.FirstOrDefault(x => x.Name.ToLower() == brandName.ToLower());
                        brandId = context.CarBrand.FirstOrDefault(x => x.Name.ToLower() == brandName.ToLower()).Id;
                        continue;
                    }
                    modelName += sr[i];
                    modelName = modelName.Replace("\"", "").Replace(",", "");
                    modelName += " ";
                    var isLast = false;
                    if (sr.Length-1 != i)
                    {
                        var o = sr[i + 1];
                        var m = sr[i + 1].IndexOf("$$");
                    isLast = sr[i+1].IndexOf("$$") >= 0;

                    }
                    if (isLast || sr.Length-1 == i)
                    {
                        var model = new CarModel
                        {
                            Id = Guid.NewGuid().ToString(),
                            Name = modelName,
                            CarBrandId = brandId,
                            CreateDate = DateTime.Now
                        };
                        carModels.Add(model);
                        startIndex = i + 1;
                    }
                }
                return carModels;
                
            }
            
        }
    }
}
