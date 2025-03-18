/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import JobCard from "./JobCard";

/* Using Styled Components */
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h1`
  color: #6c63ff;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const JobTitle = styled.h2`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Category = styled.h4`
  color: #6c63ff;
  margin-bottom: 10px;
`;

const Country = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
`;

const JobButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background: #28a745;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #218838;
  }
`;

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("https://localhost:7279/api/Job");
        setJobs(response.data);
      } catch (err) {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <Container>
      <Title>ALL JOBS</Title>
      <Grid>
        {jobs.map((job, index) => (
          <Card key={index}>
            <JobTitle>{job.title}</JobTitle>
            <Category>{job.category}</Category>
            <Country>{job.country}</Country>
            <JobButton to={`/job/${job.id}`} className="mb-4">Job Details</JobButton>
            {/* Added JobCard */}
            <JobCard key={job.id} job={job} />
            {/* End */}
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Jobs;
