/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { MessageContext } from "../../services/MessageContext";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const Applicants = () => {
  const { setMsg } = useContext(MessageContext);
  const [jobseekers, setJobseekers] = useState([]);
  const [employerId, setEmployerId] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setEmployerId(decodedToken.userId); // Extract employer's ID
    }

    // Fetch Jobseekers
    axios
      .get("https://localhost:7279/api/Application")
      .then((response) => {
        setJobseekers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center fw-bold mb-4">Jobseekers</h1>

        <div className="row">
          {jobseekers.map((seeker) => (
            <div className="col-md-4" key={seeker.id}>
              <div className="card p-3 mb-3 shadow-lg border-0">
                <h4 className="fw-bold text-primary mb-4 text-uppercase">
                  {seeker.companyName}
                </h4>
                <p>
                  <strong>Name:</strong> {seeker.name}
                </p>
                <p>
                  <strong>Email:</strong> {seeker.email}
                </p>
                <p>
                  <strong>Phone:</strong> {seeker.phone}
                </p>
                <button
                  className="btn btn-success w-100 mb-3"
                  onClick={() =>
                    setMsg(
                      `Hii, ${seeker.name} Your interview is scheduled tomorrow for ${seeker.companyName} role!`
                    )
                  }
                >
                  📩 Send Interview Notification
                </button>
                <button
                  className="btn btn-danger w-100"
                  onClick={() =>
                    setMsg(
                      `Hii, ${seeker.name} We regret to inform you that you were not selected for ${seeker.companyName} role.`
                    )
                  }
                >
                  ❌ Send Rejection Notification
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Applicants;
