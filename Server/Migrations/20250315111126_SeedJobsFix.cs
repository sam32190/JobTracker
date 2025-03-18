using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Server.Migrations
{
    /// <inheritdoc />
    public partial class SeedJobsFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Jobs",
                columns: new[] { "Id", "City", "Description", "FixedSalary", "JobPostedOn", "Location", "SalaryFrom", "SalaryTo", "category", "country", "title" },
                values: new object[,]
                {
                    { 1, "New York", "Develop and maintain web applications.", null, new DateTime(2025, 3, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Remote", 80000, 120000, "IT", "USA", "Software Engineer" },
                    { 2, "Toronto", "Analyze business data and provide insights.", null, new DateTime(2025, 2, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hybrid", 60000, 90000, "Analytics", "Canada", "Data Analyst" },
                    { 3, "London", "Oversee project timelines and resources.", null, new DateTime(2025, 3, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "On-Site", 70000, 110000, "Management", "UK", "Project Manager" },
                    { 4, "Berlin", "Manage hiring and employee relations.", 65000, new DateTime(2025, 1, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "Remote", null, null, "Human Resources", "Germany", "HR Specialist" },
                    { 5, "Paris", "Plan and execute marketing campaigns.", null, new DateTime(2025, 2, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hybrid", 50000, 75000, "Marketing", "France", "Marketing Coordinator" },
                    { 6, "Amsterdam", "Design user interfaces and experiences.", null, new DateTime(2025, 3, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "On-Site", 55000, 85000, "Design", "Netherlands", "UX Designer" },
                    { 7, "Sydney", "Protect systems and networks from cyber threats.", null, new DateTime(2025, 1, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hybrid", 75000, 100000, "Security", "Australia", "Cybersecurity Analyst" },
                    { 8, "Bangalore", "Manage and optimize databases.", 72000, new DateTime(2025, 3, 3, 0, 0, 0, 0, DateTimeKind.Unspecified), "Remote", null, null, "IT", "India", "Database Administrator" },
                    { 9, "San Francisco", "Evaluate business processes and performance.", null, new DateTime(2025, 2, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "On-Site", 65000, 95000, "Business", "USA", "Business Analyst" },
                    { 10, "Vancouver", "Write and edit content for various platforms.", null, new DateTime(2025, 2, 28, 0, 0, 0, 0, DateTimeKind.Unspecified), "Remote", 45000, 70000, "Writing", "Canada", "Content Writer" },
                    { 11, "Munich", "Maintain and troubleshoot network infrastructure.", null, new DateTime(2025, 1, 18, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hybrid", 68000, 105000, "Networking", "Germany", "Network Engineer" },
                    { 12, "Lyon", "Optimize websites for search engines.", 58000, new DateTime(2025, 2, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "Remote", null, null, "Digital Marketing", "France", "SEO Specialist" },
                    { 13, "Manchester", "Design and implement cloud solutions.", null, new DateTime(2025, 1, 30, 0, 0, 0, 0, DateTimeKind.Unspecified), "On-Site", 90000, 130000, "Cloud Computing", "UK", "Cloud Architect" },
                    { 14, "Los Angeles", "Develop AI models and algorithms.", null, new DateTime(2025, 2, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), "Hybrid", 100000, 150000, "Artificial Intelligence", "USA", "AI Engineer" },
                    { 15, "Pune", "Provide technical assistance to customers.", 50000, new DateTime(2025, 3, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), "Remote", null, null, "Customer Support", "India", "Technical Support" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
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
        }
    }
}
