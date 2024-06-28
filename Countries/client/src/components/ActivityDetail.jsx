import "../styles/ActivityDetail.css";
import React from "react";

export default function ActivityDetail({ activities }) {

  return (
    <div>
      {activities.map((activity) => (
        <div key={activity.id}>
          <div className="country-cardActivity">
            <div className="detail-row">
              <span className="detail-property" id="nameActivity">
                {activity.name}
              </span>
            </div>
            <div className="detail-row" id="seasonActivity">
              <span className="detail-value">Season: {activity.season}</span>
            </div>
            <div className="detail-row">
              <span className="detail-value">
                Difficulty: {activity.difficulty}
              </span>
            </div>
            <div className="detail-row">
              <span className="detail-value">
                Duration: {activity.duration}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
