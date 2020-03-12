using GaragePersistent.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Seed
{
    public static class GarageSeedExtensions
    {
        public static void Seed<T>(this ModelBuilder modelBuilder,IEnumerable<T> seedData)
            where T : class
        {
            modelBuilder.Entity<T>().HasData(seedData);

        }
    }
}
