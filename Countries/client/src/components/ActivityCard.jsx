import "../styles/ActivityCard.css";
import React from "react";
import { Link } from "react-router-dom";

export default function ActivityCard({
  activity,
  handleDeleteActivity,
  handleEditActivity,
}) {
  return (
    <div className="cardActivities">
      <div className="nameActivity">
        <span id="nameActivities">
          {activity?.name}
        </span>
      </div>
      <div className="activity-row">
        <p className="detail-value">Season: {activity?.season}</p>
        <p className="detail-value">Difficulty: {activity?.difficulty}</p>
        <p className="detail-value">Duration: {activity?.duration}</p>
        <hr className="horizontal-line" />
        <div className="activityOptions">
          <button className="deleteButton" onClick={handleDeleteActivity}>
            <img
              src="/images/eliminar.png"
              alt="delete"
              className="deleteActivity"
            />
          </button>
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
