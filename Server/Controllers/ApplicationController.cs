using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ApplicationController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitApplication([FromBody] Application application)
        {
            if (application == null)
                return BadRequest("Invalid application data.");

            _context.Applications.Add(application);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Application submitted successfully!" });
        }

        // ✅ Get all form details from the database
        [HttpGet]
        public async Task<IActionResult> GetAllApplications()
        {
            var applications = await _context.Applications.ToListAsync();

            if (applications.Count == 0)
                return NotFound("No applications found.");

            return Ok(applications);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateApplication(int id, [FromBody] Application updatedApp)
        {
            var app = _context.Applications.FirstOrDefault(a => a.ID == id);
            if (app == null) return NotFound();

            app.name = updatedApp.name;
            app.email = updatedApp.email;
            app.phone = updatedApp.phone;

            _context.SaveChanges();
            return Ok(app);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteApplication(int id)
        {
            var app = _context.Applications.FirstOrDefault(a => a.ID == id);
            if (app == null) return NotFound();

            _context.Applications.Remove(app);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
