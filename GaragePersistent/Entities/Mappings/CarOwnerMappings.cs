using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Entities.Mappings
{
    public class CarOwnerMappings : IEntityTypeConfiguration<CarOwner>
    {
        public void Configure(EntityTypeBuilder<CarOwner> builder)
        {
            builder.ToTable("CarOwner");
        }
    }
}
