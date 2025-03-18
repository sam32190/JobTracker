using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Job
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string title { get; set; }
        [Required]
        public string category { get; set; }
        [Required]
        public string country { get; set; }
        public string City { get; set; }
        public string Location { get; set; }
        public string Description { get; set; }
        public DateTime JobPostedOn { get; set; }
        public int? SalaryFrom { get; set; }
        public int? SalaryTo { get; set; }
        public int? FixedSalary { get; set; }
    }
}
