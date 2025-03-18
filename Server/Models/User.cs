using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Server.Models
{
    public class User
    {
        public int Id { get; set; }

        [JsonPropertyName("email")]
        public string Email { get; set; }

        [JsonPropertyName("password")]

        [MinLength(6, ErrorMessage = "Password must be at least 6 charcters long")]

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        // Added role here
        public string Role { get; set; } = "jobseeker";

    }
}
