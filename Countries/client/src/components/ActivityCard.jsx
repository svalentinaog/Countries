import "../styles/ActivityCard.css";
import { Link } from "react-router-dom";

export default function ActivityCard({
  activity,
  handleDeleteActivity,
  handleEditActivity,
}) {
  return (
    <div className="cardActivities">
      {/*🐝 Nombre */}
      <div className="nameActivity">
        <span id="nameActivities" className="activity-name">
          {activity?.name}
        </span>
      </div>

      <div className="activity-row">
        {/*🐝 Season */}
        <p className="detail-value">Season: {activity?.season}</p>

        {/*🐝 Dificultad */}
        <p className="detail-value">Difficulty: {activity?.difficulty}</p>

        {/*🐝 Duracion */}
        <p className="detail-value">Duration: {activity?.duration}</p>

        <hr className="horizontal-line" />

        <div className="activityOptions">
          {/*🐝 Delete */}
          <button className="deleteButton" onClick={handleDeleteActivity}>
            <img
              src="/images/eliminar.png"
              alt="delete"
              className="deleteActivity"
            />
          </button>

          {/*🐝 Edit / Update */}
          <Link
            to={`/edit/${activity.id}`}
            className="editButton"
            onClick={() => handleEditActivity(activity)}
          >
            <img
              src="/images/update.png"
              alt="edit"
              className="editActivity editButton"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
