import React from "react";
import "../styles/ActivityDetail.css";

export default function ActivityDetail({ activities }) {
  console.log("Actividad(es) asociada(s) a este País ☕😉", activities);

  return (
    <div>
      {activities.map((activity) => (
        <div key={activity.id} className="activity-card">
          <div className="country-cardActivity">
            <div className="detail-row">
              <span className="detail-property" id="nameActivity">
                {activity.name}
              </span>
            </div>
            <div className="detail-row" id="seasonActivity">
              <span className="detail-value">
                Season: {activity.season}
              </span>
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

