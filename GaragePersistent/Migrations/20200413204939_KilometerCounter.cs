using Microsoft.EntityFrameworkCore.Migrations;

namespace GaragePersistent.Migrations
{
    public partial class KilometerCounter : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "KilometerCounter",
                table: "Repair",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "KilometerCounter",
                table: "Repair");
        }
    }
}
