using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GaragePersistent.Migrations
{
    public partial class LastOilChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "LastOilChange",
                table: "Car",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LastOilChange",
                table: "Car");
        }
    }
}
