import "../styles/Card.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ country }) {
  const handleImageError = (event) => {
    event.target.onerror = null; 
    event.target.src = "/countryNotFound.png";
  };

  const chainClipping = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };

  return (
    <Link to={`/country/${country.id}`} style={{ textDecoration: "none" }}>
      <div className="country-card">
        <div className="img-nationalFlag">
          <img
            src={country.image}
            alt={country.name}
            className="image-space"
            onError={handleImageError}
          />
        </div>
        <div className="countryCard-info">
          <div className="country-info">
            <p className="country-name">{chainClipping(country.name, 15)}</p>
          </div>
          <div className="country-info">
            <p className="country-continent">{country.continent}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
