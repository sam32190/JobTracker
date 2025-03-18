/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// Import Google Font
const GlobalStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");

  * {
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const JobFilter = () => {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetchJobs();
  }, [title, country, city, location]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7279/api/Job/filter",
        {
          params: { title, country, city, location },
        }
      );
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <GlobalStyle>
      <FilterContainer>
        <h2 className="title mb-4 text-dark fw-bold">Find Your Dream Job</h2>
        <FilterBox>
          <Input
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <Input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FilterBox>

        <JobsContainer>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <GlassCard key={job.id}>
                <h5>
                  {job.title} -{" "}
                  <span className="text-muted">
                    {job.city}, {job.country}
                  </span>
                </h5>
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <ApplyButton to="/applications/me">Apply Now</ApplyButton>
              </GlassCard>
            ))
          ) : (
            <NoJobsMessage>No jobs found matching the criteria.</NoJobsMessage>
          )}
        </JobsContainer>
      </FilterContainer>
    </GlobalStyle>
  );
};

export default JobFilter;

// Styled Components

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6a11cb,rgb(14, 14, 207)); /* NEW BACKGROUND */
  padding: 20px;
  color: white;
`;

const FilterBox = styled.div`
  display: flex;
  gap: 15px;
  background: black;
  backdrop-filter: blur(12px);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  width: 70%;
  justify-content: center;
`;

const Input = styled.input`
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  width: 100%;
  max-width: 200px;
  outline: none;
  transition: 0.3s;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
`;

const JobsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.3); /* Lighter frosted glass effect */
  border-radius: 15px;
  padding: 20px;
  backdrop-filter: blur(15px); /* Stronger blur for visibility */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  color: white;
  transition: 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.2); /* Soft white border */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(255, 255, 255, 0.4);
  }

  h5 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;


const ApplyButton = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background: #ffcc70;
  color: #1e1e2f;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #ffb347;
    transform: scale(1.05);
  }
`;

const NoJobsMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #ff7373;
`;
