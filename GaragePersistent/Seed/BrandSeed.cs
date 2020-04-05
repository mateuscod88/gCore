using GaragePersistent.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Seed
{
    public static class BrandSeed
    {
        private static List<string> _brands = new List<string>
        {
            "ABARTH",
            "ACURA",
            "AIXAM",
            "ALFAROMEO",
            "ANDORIA",
            "ARO",
            "ASTONMARTIN",
            "AUDI",
            "AUSTIN",
            "BEDFORD",
            "BENTLEY",
            "BMW",
            "BUICK",
            "CADILLAC",
            "CHERY",
            "CHEVROLET",
            "CHRYSLER",
            "CITROEN",
            "DACIA",
            "DAEWOO",
            "DAF",
            "DAIHATSU",
            "DODGE",
            "FERRARI",
            "FIAT",
            "FORD",
            "FORDUSA",
            "FSO",
            "GAZ",
            "GEO",
            "GMC",
            "GREATWALL",
            "HONDA",
            "HUMMER",
            "HYUNDAI",
            "INFINITI",
            "INNOCENTI",
            "ISUZU",
            "IVECO",
            "JAGUAR",
            "JEEP",
            "KIA",
            "LADA",
            "LAMBORGHINI",
            "LANCIA",
            "LANDROVER",
            "LDV",
            "LEXUS",
            "LINCOLN",
            "LOTUS",
            "MAN",
            "MASERATI",
            "MAYBACH",
            "MAZDA",
            "MERCEDES-BENZ",
            "MG",
            "MINI",
            "MITSUBISHI",
            "NISSAN",
            "OPEL",
            "PEUGEOT",
            "PLYMOUTH",
            "PONTIAC",
            "PORSCHE",
            "RENAULT",
            "RENAULTTRUCKS",
            "ROVER",
            "SAAB",
            "SEAT",
            "SKODA",
            "SMART",
            "SSANGYONG",
            "SUBARU",
            "SUZUKI",
            "TATA",
            "TESLA",
            "TOYOTA",
            "TRABANT",
            "UAZ",
            "VOLVO",
            "VW",
            "WARTBURG",
            "ZASTAVA",
            "ZAZ"
        };
        public static IEnumerable<CarBrand> GetAll()
        {
            var brands = new List<CarBrand>();
            foreach (var brand in _brands)
            {
                brands.Add(new CarBrand { Id = Guid.NewGuid().ToString(), Name = brand, CreateDate = DateTime.Now });
            }
            return brands;
        }
    }
}
