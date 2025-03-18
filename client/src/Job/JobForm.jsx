import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

// For Admin Only
const JobForm = () => {
  // Hook For Navigation
  const navigate = useNavigate();

  const [job, setJob] = useState({
    title: "",
    category: "",
    country: "",
    city: "",
    location: "",
    description: "",
    jobPostedOn: new Date().toISOString().slice(0, 16), // Default to current datetime
    salaryFrom: "",
    salaryTo: "",
    fixedSalary: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:7279/api/Jobs", job);
      toast.success("Job added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding job", error);
      toast.error("Failed to add job");
    }
  };

  return (
    <>
      <Toaster position="top-center" autoclose={2000} />
      <div className="container d-flex justify-content-center align-items-center min-vh-100 mt-4 mb-4">
        <div className="card shadow-lg p-4 w-50">
          <h2 className="text-center mb-4">Add Job</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={job.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  name="category"
                  className="form-control"
                  value={job.category}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  value={job.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  value={job.city}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                name="location"
                className="form-control"
                value={job.location}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="description"
                className="form-control"
                rows="3"
                value={job.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Job Posted On</label>
              <input
                type="datetime-local"
                name="jobPostedOn"
                className="form-control"
                value={job.jobPostedOn}
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Salary From</label>
                <input
                  type="number"
                  name="salaryFrom"
                  className="form-control"
                  value={job.salaryFrom}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Salary To</label>
                <input
                  type="number"
                  name="salaryTo"
                  className="form-control"
                  value={job.salaryTo}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Fixed Salary</label>
                <input
                  type="number"
                  name="fixedSalary"
                  className="form-control"
                  value={job.fixedSalary}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-100">
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobForm;
