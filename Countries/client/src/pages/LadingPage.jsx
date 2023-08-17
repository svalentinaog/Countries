import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css";

export default function LandingPage() {
  return (
    <div className="container-landing-page">
      <div className="subContainer-text-and-button">
        {/* Encabezado */}
        <h1 className="welcome-text">Welcome to Countries App!</h1>
        {/* Párrafo descriptivo */}
        <p className="text-paragraph">
          Explore all the countries of the world and the exciting activities you
          can do.
        </p>
        {/* Enlace a la página de inicio */}
        <Link to="/home" className="home-button">
          <span> Start exploring » </span>
        </Link>
      </div>
    </div>
  );
}
