import "../styles/DetailPage.css";
import React, { useState, useEffect } from "react";
import BaseLayout from "../components/BaseLayout";
import ActivityDetail from "../components/ActivityDetail";
import Loader from "./Loader"; 
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailPage() {
  const { idPais } = useParams(); 
  const [country, setCountry] = useState(null); 
  const [activities, setActivities] = useState([]);
  const [hasActivities, setHasActivities] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setIsLoading(true);
    axios(`http://localhost:3001/countries/${idPais}`).then(({ data }) => {
      if (data) {
        setCountry(data);
        const countryActivities = data.Activities;
        setActivities(countryActivities);
        setHasActivities(countryActivities.length > 0); 
        setIsLoading(false); 
      }
    });
  }, [idPais]);

  const goBack = () => {
    window.history.back();
  };

  return (
    <BaseLayout>
      {isLoading ? ( 
        <Loader />
      ) : (
        <div className="detail-container">
          <div className="detail-page">
            <div className="detailCountry">
              <div className="detailed-text-container">
                <div className="detail-text-button">
                  <h1>Hello!</h1>
                  <p>Here you have the information of the selected country.</p>
                  <div>
                    <button className="back-detail" onClick={goBack}>
                      &#8592; BACK
                    </button>
                  </div>
                </div>
              </div>
              <div className="country-detail">

                <div className="detailImage">
                  {country && (
                    <img
                      src={country.image}
                      alt={country.name}
                      className="detailImage-space"
                    />
                  )}
                </div>

                <div className="country-information">

                  <div className="detail-row">
                    <span className="detail-property" id="id-detail">
                      N.º{country?.id}
                    </span>
                  </div>

                  <div className="detail-row">
                    <span className="detail-property" id="name-detail">
                      {country?.name}
                    </span>
                  </div>

                  <div className="detail-row">
                    <span className="detail-value">
                      Continent: {country?.continent}
                    </span>
                  </div>

                  <div className="detail-row">
                    <span className="detail-value">
                      Capital: {country?.capital}
                    </span>
                  </div>

                  <div className="detail-row">
                    <span className="detail-value">
                      Subregion: {country?.subregion}
                    </span>
                  </div>

                  <div className="detail-row">
                    <span className="detail-value">
                      N.º Area: {country?.area}
                    </span>
                  </div>

                  <div className="detail-row">
                    <span className="detail-value">
                      N.º Population: {country?.population}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-activities-cards">
              <div className="titleActivities">
                <h2>Tourist activities:</h2>
              </div>
              {hasActivities ? (
                <div className="activities">
                  <ActivityDetail activities={activities} />
                </div>
              ) : (
                <div className="no-activities-message">
                  <p>
                    There are no tourist activities available for this country.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </BaseLayout>
  );
}
