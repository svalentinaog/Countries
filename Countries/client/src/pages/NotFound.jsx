import "../styles/NotFound.css";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-notFound-page">
      <div className="text-notFound">
        <h1>404</h1>
        <p>Sorry, but the page you are looking for is not here.</p>
        <Link to="/home" className="notFound-button">
          GO TO HOME PAGE »
        </Link>
      </div>

      <img
        src="/images/countryNotFound.png"
        alt="NotFound"
        className="notFound-image"
      />
    </div>
  );
}
