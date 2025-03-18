using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class JobSeedingToDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 101000, 82000, 123000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 76000, 61000, 92000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 91000, 72000, 115000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 67000, 63000, 71000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 64500, 52000, 77000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 71500, 56000, 87000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 89000, 76500, 103000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 84500, 73000, 96000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 9,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 82500, 67000, 98000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 10,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 59000, 46000, 72000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 11,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 88000, 69000, 107000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 12,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 69000, 59000, 79000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 13,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 112000, 91000, 133000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 14,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 127000, 101000, 153000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 15,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 57000, 51000, 63000 });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { null, 80000, 120000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { null, 60000, 90000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { null, 70000, 110000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 65000, null, null });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { null, 50000, 75000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { null, 55000, 85000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { null, 75000, 100000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 72000, null, null });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 9,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { null, 65000, 95000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 10,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { null, 45000, 70000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 11,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { null, 68000, 105000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 12,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 58000, null, null });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 13,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { null, 90000, 130000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 14,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { null, 100000, 150000 });

            migrationBuilder.UpdateData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 15,
                columns: new[] { "FixedSalary", "SalaryFrom", "SalaryTo" },
                values: new object[] { 50000, null, null });
        }
    }
}
