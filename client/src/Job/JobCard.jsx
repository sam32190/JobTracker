import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoriteReducer.js";

const JobCard = ({ job }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.favorites);

  const isFavorite = favorites.some((favJob) => favJob.id === job.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(job.id));
    } else {
      dispatch(addFavorite(job));
    }
  };

  return (
    <div className="job-card">
      <button
        onClick={handleFavorite}
        className={`btn ${isFavorite ? "btn-danger" : "btn-success"} mb-4 w-50`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default JobCard;
