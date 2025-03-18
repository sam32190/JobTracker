using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("GetUser")]
        [Authorize] // Ensures only authenticated users can access
        public IActionResult GetUser()
        {
            // Extract user ID from the JWT token
            var userRole = User.FindFirstValue(ClaimTypes.Role);

            if (userRole == null)
            {
                return Unauthorized(new { message = "Role not found in token." });
            }

            return Ok(new { role = userRole });
        }


    }
}
