using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace GaragePersistent.Entities.Mappings
{
    public class CarEngineMappings : IEntityTypeConfiguration<CarEngine>
    {
        public void Configure(EntityTypeBuilder<CarEngine> builder)
        {
            builder.ToTable("CarEngine");
        }
    }
}
