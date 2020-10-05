using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Helper
{
    public class CustomConfiguration
    {
        private IConfiguration _configuration;
        public CustomConfiguration(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public string GetConnectionString()
        {
            var connectionString = _configuration.GetSection("ConnectionString:GarageContext").Value;
            return connectionString;
        }
    }
}
