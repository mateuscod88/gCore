using Bogus;
using GaragePersistent.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Seed
{
    public static class OwnerSeed
    {
        public static IEnumerable<CarOwner> GetAll()
        {
            var ownerIds = 0;
            var testOwner = new Faker<CarOwner>()
                .RuleFor(x => x.FirstName, (f, u) => f.Name.FirstName())
                .RuleFor(x => x.LastName, (f, u) => f.Name.LastName())
                .RuleFor(x => x.Phone, (f, u) => f.Phone.PhoneNumber())
                .RuleFor(x => x.CreateDate, DateTime.Now)
                .FinishWith((f, u) =>
                {
                    Console.WriteLine($"Owner Created ! Id={u.Id}");
                });

            var carOwnersArray = testOwner.Generate(20).ToArray();

            return carOwnersArray;
        }
    }
}
