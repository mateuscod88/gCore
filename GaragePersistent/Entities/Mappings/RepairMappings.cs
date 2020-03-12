using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Entities.Mappings
{
    public class RepairMappings : IEntityTypeConfiguration<Repair>
    {
        public void Configure(EntityTypeBuilder<Repair> builder)
        {
            builder.ToTable("Repair");
        }
    }
}
