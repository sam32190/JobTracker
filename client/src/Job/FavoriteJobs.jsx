import { useSelector } from "react-redux";

const FavoriteJobs = () => {
  const favorites = useSelector((state) => state.favorite.favorites);

  return (
    <div className="favorite-jobs-container">
      <style jsx>{`
        /* General styling for the container */
        .favorite-jobs-container {
          width: 80%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: "Arial", sans-serif;
        }

        /* Title styling */
        .title {
          font-size: 2rem;
          font-weight: 600;
          color: #2c3e50;
          text-align: center;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* Message when no favorites are available */
        .no-favorites {
          font-size: 1.2rem;
          color: #7f8c8d;
          text-align: center;
        }

        /* Styling for individual job cards */
        .job-card {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          margin: 15px 0;
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .job-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        /* Job title and information styling */
        .job-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #34495e;
          margin-bottom: 10px;
        }

        .job-info {
          font-size: 1.1rem;
          color: #7f8c8d;
          font-weight: 500;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .favorite-jobs-container {
            width: 95%;
          }

          .title {
            font-size: 1.6rem;
          }

          .job-card {
            padding: 15px;
          }
        }
      `}</style>

      <h2 className="title">Favorite Jobs</h2>
      {favorites.length === 0 ? (
        <p className="no-favorites">No favorite jobs yet.</p>
      ) : (
        favorites.map((job) => (
          <div key={job.id} className="job-card">
            <h3 className="job-title">{job.title}</h3>
            <p className="job-info">
              {job.category} - {job.location}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoriteJobs;
