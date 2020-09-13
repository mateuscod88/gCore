using Microsoft.EntityFrameworkCore.Migrations;

namespace GaragePersistent.Migrations
{
    public partial class repairIsDeletedColumn_Add : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "Repair",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "Repair");
        }
    }
}
