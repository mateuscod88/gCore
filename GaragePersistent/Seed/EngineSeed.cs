using GaragePersistent.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Seed
{
    public static class EngineSeed
    {
        public static IEnumerable<CarEngine> GetAll()
        {
            var length = 9;
            var engines = new List<CarEngine>();
            int carModeId = 1;
            for (int i = 0; i < length; i++)
            {
                var carEngine = new CarEngine
                {
                    Id = i.ToString(),
                    Name = GetEngineName(((i % 3) + 1).ToString()),
                    CarModelId = carModeId.ToString()

                };
                engines.Add(carEngine);

                if (i % 3 == 0) carModeId++;
            }
            return engines;
        }

        private static string GetEngineName(string engineId)
        {
            switch (engineId)
            {
                case "1":
                    return "1.9TDI";
                    break;
                case "2":
                    return "1.8TSI";
                    break;
                case "3":
                    return "2.0TSI";
                    break;
                default: return "1.0 TSI";
            }
        }
    }
}
