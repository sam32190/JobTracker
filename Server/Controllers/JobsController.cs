using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Controllers
    {
        [Route("api/[controller]")]
        [ApiController]
        // Ensures only authenticated users can access
        public class JobsController : ControllerBase
        {
            private readonly ApplicationDbContext _context;

            public JobsController(ApplicationDbContext context)
            {
                _context = context;
            }

            // GET: api/job
            [HttpGet]
            public async Task<ActionResult<IEnumerable<Job>>> GetJobs()
            {
                return await _context.Jobs.ToListAsync();
            }

            // GET: api/job/{id}
            [HttpGet("{id}")]
            public async Task<ActionResult<Job>> GetJob(int id)
            {
                var job = await _context.Jobs.FindAsync(id);

                if (job == null)
                {
                    return NotFound(new { message = "Job not found" });
                }

                return job;
            }

            // POST: api/job
            [HttpPost]
            public async Task<ActionResult<Job>> PostJob(Job job)
            {
                job.JobPostedOn = DateTime.UtcNow;
                _context.Jobs.Add(job);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetJob), new { id = job.Id }, job);
            }

            // PUT: api/job/{id}
            [HttpPut("{id}")]
            public async Task<IActionResult> UpdateJob(int id, Job jobUpdate)
            {
                var job = await _context.Jobs.FindAsync(id);
                if (job == null)
                {
                    return NotFound(new { message = "Job not found" });
                }

            job.title = jobUpdate.title;
            job.category = jobUpdate.category;
            job.country = jobUpdate.country;
            job.City = jobUpdate.City;
            job.Location = jobUpdate.Location;
            job.Description = jobUpdate.Description;
            job.JobPostedOn = jobUpdate.JobPostedOn;
            job.SalaryFrom = jobUpdate.SalaryFrom;
            job.SalaryTo = jobUpdate.SalaryTo;
            job.FixedSalary = jobUpdate.FixedSalary;

            await _context.SaveChangesAsync();

                return Ok(new { message = "Job updated successfully" });
            }

            // DELETE: api/job/{id}
            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteJob(int id)
            {
                var job = await _context.Jobs.FindAsync(id);
                if (job == null)
                {
                    return NotFound(new { message = "Job not found" });
                }

                _context.Jobs.Remove(job);
                await _context.SaveChangesAsync();

                return Ok(new { message = "Job deleted successfully" });
            }
        }
}
