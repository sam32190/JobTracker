using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class Notification : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Jobs",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.CreateTable(
                name: "Notifications",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notifications", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Notifications");

            migrationBuilder.InsertData(
                table: "Jobs",
                columns: new[] { "Id", "City", "Description", "FixedSalary", "JobPostedOn", "Location", "SalaryFrom", "SalaryTo", "category", "country", "title" },
                values: new object[,]
                {
                    { 1, "New York", "Develop and maintain web applications.", 101000, new DateTime(2025, 3, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Remote", 82000, 123000, "IT", "USA", "Software Engineer" },
                    { 2, "Toronto", "Analyze business data and provide insights.", 76000, new DateTime(2025, 2, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hybrid", 61000, 92000, "Analytics", "Canada", "Data Analyst" },
                    { 3, "London", "Oversee project timelines and resources.", 91000, new DateTime(2025, 3, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "On-Site", 72000, 115000, "Management", "UK", "Project Manager" },
                    { 4, "Berlin", "Manage hiring and employee relations.", 67000, new DateTime(2025, 1, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "Remote", 63000, 71000, "Human Resources", "Germany", "HR Specialist" },
                    { 5, "Paris", "Plan and execute marketing campaigns.", 64500, new DateTime(2025, 2, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hybrid", 52000, 77000, "Marketing", "France", "Marketing Coordinator" },
                    { 6, "Amsterdam", "Design user interfaces and experiences.", 71500, new DateTime(2025, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "On-Site", 56000, 87000, "Design", "Netherlands", "UX Designer" },
                    { 7, "Sydney", "Protect systems and networks from cyber threats.", 89000, new DateTime(2025, 1, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hybrid", 76500, 103000, "Security", "Australia", "Cybersecurity Analyst" },
                    { 8, "Bangalore", "Manage and optimize databases.", 84500, new DateTime(2025, 3, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), "Remote", 73000, 96000, "IT", "India", "Database Administrator" },
                    { 9, "San Francisco", "Evaluate business processes and performance.", 82500, new DateTime(2025, 2, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "On-Site", 67000, 98000, "Business", "USA", "Business Analyst" },
                    { 10, "Vancouver", "Write and edit content for various platforms.", 59000, new DateTime(2025, 2, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "Remote", 46000, 72000, "Writing", "Canada", "Content Writer" },
                    { 11, "Munich", "Maintain and troubleshoot network infrastructure.", 88000, new DateTime(2025, 1, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hybrid", 69000, 107000, "Networking", "Germany", "Network Engineer" },
                    { 12, "Lyon", "Optimize websites for search engines.", 69000, new DateTime(2025, 2, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Remote", 59000, 79000, "Digital Marketing", "France", "SEO Specialist" },
                    { 13, "Manchester", "Design and implement cloud solutions.", 112000, new DateTime(2025, 1, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), "On-Site", 91000, 133000, "Cloud Computing", "UK", "Cloud Architect" },
                    { 14, "Los Angeles", "Develop AI models and algorithms.", 127000, new DateTime(2025, 2, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hybrid", 101000, 153000, "Artificial Intelligence", "USA", "AI Engineer" },
                    { 15, "Pune", "Provide technical assistance to customers.", 57000, new DateTime(2025, 3, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), "Remote", 51000, 63000, "Customer Support", "India", "Technical Support" }
                });
        }
    }
}
