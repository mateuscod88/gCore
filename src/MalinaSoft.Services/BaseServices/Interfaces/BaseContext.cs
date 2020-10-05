using GaragePersistent.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace GarageServices.BaseServices.Interfaces
{
    public class BaseContext
    {
        protected readonly GarageContext _garageContext;

        public BaseContext(GarageContext garageContext)
        {
            _garageContext = garageContext;
        }
    }
}
