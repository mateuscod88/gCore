using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GaragePersistent.Migrations
{
    public partial class technicalCheckNullable_Add : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "TechnicalCheck",
                table: "Car",
                nullable: true,
                oldClrType: typeof(DateTime));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "TechnicalCheck",
                table: "Car",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);
        }
    }
}
