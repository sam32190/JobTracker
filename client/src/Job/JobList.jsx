/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [editJob, setEditJob] = useState(null);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("https://localhost:7279/api/Jobs");
      setJobs(response.data);
    } catch (error) {
      toast.error("Error fetching jobs");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7279/api/Jobs/${id}`);
      toast.success("Job deleted successfully!");
      fetchJobs();
    } catch (error) {
      toast.error("Failed to delete job");
    }
  };

  const handleEdit = (job) => {
    setEditJob(job);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`https://localhost:7279/api/Jobs/${editJob.id}`, editJob);
      toast.success("Job updated successfully!");
      setEditJob(null);
      fetchJobs();
    } catch (error) {
      toast.error("Failed to update job");
    }
  };

  return (
    <>
      <Toaster position="top-center" autoclose={3000} />
      <div className="container my-5">
        <h1 className="text-center mb-4 text-primary fw-bold">Job Listings</h1>
        <div className="row">
          {jobs.map((job) => (
            <div key={job.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card job-card shadow-sm border-light rounded">
                <div className="card-body">
                  <h2 className="card-title fw-bold text-dark mb-4">
                    {job.title}
                  </h2>
                  <h5 className="card-text text-muted mb-4">{job.category}</h5>
                  <p className="card-text">
                    <i className="bi bi-geo-alt-fill text-danger"></i>{" "}
                    {job.country}
                  </p>
                  <div className="d-flex justify-content-between gap-3 mt-3">
                    <button
                      className="btn btn-warning btn-sm w-48"
                      onClick={() => handleEdit(job)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm w-48"
                      onClick={() => handleDelete(job.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Job Form */}
        {editJob && (
          <div className="edit-form card p-4 mt-5 shadow-lg rounded">
            <h3 className="text-center text-success fw-bold">Edit Job</h3>
            <input
              type="text"
              className="form-control mb-3"
              value={editJob.title}
              onChange={(e) =>
                setEditJob({ ...editJob, title: e.target.value })
              }
              placeholder="Job Title"
            />
            <input
              type="text"
              className="form-control mb-3"
              value={editJob.category}
              onChange={(e) =>
                setEditJob({ ...editJob, category: e.target.value })
              }
              placeholder="Category"
            />
            <input
              type="text"
              className="form-control mb-3"
              value={editJob.country}
              onChange={(e) =>
                setEditJob({ ...editJob, country: e.target.value })
              }
              placeholder="Country"
            />
            <button className="btn btn-success w-100" onClick={handleUpdate}>
              Update Job
            </button>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style>{`
        /* Glassmorphism Background Effect */
        .container {
          background: rgba(255, 255, 255, 0.1); /* Semi-transparent white */
          border-radius: 15px;
          backdrop-filter: blur(10px); /* Creates the frosted glass blur effect */
          padding: 40px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        /* Job Card Styling */
        .job-card {
          border-radius: 12px;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          cursor: pointer;
        }
        .job-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
        }

        /* Edit Form Styling */
        .edit-form {
          max-width: 500px;
          margin: auto;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          padding: 20px;
        }
        .edit-form input {
          border-radius: 10px;
          border: 1px solid #ddd;
        }
        .edit-form button {
          border-radius: 10px;
          padding: 10px 15px;
        }
        
        /* Button Styling */
        .btn-warning, .btn-danger, .btn-success {
          font-size: 14px;
          padding: 8px 20px;
        }

        /* Hover Effects */
        .btn-warning:hover, .btn-danger:hover, .btn-success:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default JobList;
