import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const JobDetails = () => {
  // Get job ID from URL params
  const { id } = useParams();

  // State to store job details
  const [job, setJob] = useState(null);

  // Hook for navigation
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch job details from API using the job ID
    axios
      .get(`https://localhost:7279/api/Job/${id}`)
      .then((res) => setJob(res.data)) // Update state with job details
      .catch(() => navigate("/notfound"));
  }, [id, navigate]);

  if (!job) {
    return <LoadingMessage>Loading job details...</LoadingMessage>;
  }

  return (
    <JobDetailContainer>
      <GlassCard>
        <h3>Job Details</h3>
        <JobInfo>
          <p>
            <strong>Title:</strong> {job.title || "N/A"}
          </p>
          <p>
            <strong>Category:</strong> {job.category || "N/A"}
          </p>
          <p>
            <strong>Country:</strong> {job.country || "N/A"}
          </p>
          <p>
            <strong>City:</strong> {job.city || "N/A"}
          </p>
          <p>
            <strong>Location:</strong> {job.location || "N/A"}
          </p>
          <p>
            <strong>Description:</strong> {job.description || "N/A"}
          </p>
          <p>
            <strong>Job Posted On:</strong> {job.jobPostedOn || "N/A"}
          </p>
          <p>
            <strong>Salary:</strong>{" "}
            {job.fixedSalary ? (
              <span>{job.fixedSalary}</span>
            ) : (
              <span>
                {job.salaryFrom || "N/A"} - {job.salaryTo || "N/A"}
              </span>
            )}
          </p>
        </JobInfo>
        {/* Link to apply for the job with job ID and company name */}
        <ApplyButton
          to={`/application/${job.id}`}
          state={{ companyName: job.title }}
        >
          Apply Now
        </ApplyButton>
      </GlassCard>
    </JobDetailContainer>
  );
};

export default JobDetails;

// Styled Components

const JobDetailContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1e1e2f, #2d2d44);
  padding: 20px;
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  color: white;
  max-width: 500px;
  width: 100%;
  text-align: center;
  transition: 0.3s ease-in-out;

  h3 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 15px;
  }
`;

const JobInfo = styled.div`
  p {
    font-size: 18px;
    margin: 10px 0;
    strong {
      color: #ffcc70;
    }
  }
`;

const ApplyButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #ffcc70;
  color: #1e1e2f;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #ffb347;
  }
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: 40px;
  color: white;
`;
