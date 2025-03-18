using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;

namespace Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public JobController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Job>>> GetAllJobs()
        {
            return await _context.Jobs.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Job>> GetAllJobsById(int id)
        {
            var job = await _context.Jobs.FindAsync(id);

            if (job == null)
            {
                return NotFound(new { message = "Job not found" });
            }

            return Ok(job);
        }

        [HttpGet("filter")]
        public async Task<ActionResult<IEnumerable<Job>>> FilterJobs(
            [FromQuery] string title = "",
            [FromQuery] string country = "",
            [FromQuery] string city = "",
            [FromQuery] string location = "")
        {
            var jobs = _context.Jobs.AsQueryable();

            // Filter by Title
            if (!string.IsNullOrEmpty(title))
                jobs = jobs.Where(j => j.title.Contains(title));

            // Filter by Country
            if (!string.IsNullOrEmpty(country))
                jobs = jobs.Where(j => j.country == country);

            // Filter by City
            if (!string.IsNullOrEmpty(city))
                jobs = jobs.Where(j => j.City == city);

            // Filter by Location
            if (!string.IsNullOrEmpty(location))
                jobs = jobs.Where(j => j.Location.Contains(location));

            return await jobs.ToListAsync();
        }

    }
}
