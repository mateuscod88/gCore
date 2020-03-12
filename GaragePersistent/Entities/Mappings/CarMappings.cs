using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GaragePersistent.Entities.Mappings
{
    public class CarMappings : IEntityTypeConfiguration<Car>
    {
        public void Configure(EntityTypeBuilder<Car> entityTypeBuilder)
        {
            entityTypeBuilder.ToTable("Car");

            //entityTypeBuilder.Property(e => e.IdPodmiotWlascicielBiznesowy).HasMaxLength(64);

            //entityTypeBuilder.Property(e => e.KodPocztowy)
            //    .IsRequired()
            //    .HasMaxLength(64);

            //entityTypeBuilder.Property(e => e.NumerDomu)
            //    .IsRequired()
            //    .HasMaxLength(64);

            //entityTypeBuilder.Property(e => e.NumerLokalu)
            //    .HasMaxLength(64);

            //entityTypeBuilder.HasOne(d => d.Ulica)
            //    .WithMany(p => p.Adresy)
            //    .HasForeignKey(d => d.IdUlica)
            //    .HasConstraintName("fk_ulica_id");
        }
    }
}
