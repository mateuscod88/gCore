using CsvHelper;
using CsvHelper.Configuration;
using GaragePersistent.Entities;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Text;

namespace GaragePersistent.Helper
{
    public class CsvSeeder<T> where T : class , IBaseEntite 
    {
        public IEnumerable<T> GetData()
        {
            var basePath = AppDomain.CurrentDomain.BaseDirectory;
            using (var reader = new StreamReader($"{basePath}SeedData{Path.DirectorySeparatorChar}{typeof(T).Name}.csv"))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                csv.Configuration.Delimiter = ",";
                csv.Configuration.TypeConverterOptionsCache.GetOptions<DateTime?>().NullValues.AddRange(new[] { "NULL", "0" });
                csv.Configuration.IgnoreReferences = true;

                
                var records = csv.GetRecords<T>();
                List<T> list = new List<T>();
                foreach (var item in records)
                {
                    list.Add(item);
                }
                IEnumerable<T> listaa = list;
                return listaa;
            }
        }
    }
}
