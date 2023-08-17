import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="container-notFound-page">
      <div className="text-notFound">
        {/* Encabezado */}
        <h1>404</h1>
        {/* Párrafo descriptivo */}
        <p>Sorry, but the page you are looking for is not here.</p>
        {/* Enlace a la página de inicio */}
        <Link to="/home" className="notFound-button">
          GO TO HOME PAGE »
        </Link>
      </div>
      {/* Imagen */}
      <img
        src="/images/countryNotFound.png"
        alt="NotFound"
        className="notFound-image"
      />
    </div>
  );
}
