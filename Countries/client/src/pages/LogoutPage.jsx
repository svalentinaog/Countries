import React from "react";
import { Link } from "react-router-dom";
import "../styles/LogoutPage.css";

export default function LogoutPage() {
  return (
    <div className="container-LogoutPage">
      <div className="LogoutPage-text-and-button">
        {/* Encabezado */}
        <h1 className="logoutPage-text">Thank you for your visit!</h1>
        {/* Párrafo descriptivo */}
        <p className="logoutPage-paragraph">
          We hope you enjoyed your experience with our application.
        </p>
        {/* Enlace a la página de inicio */}
        <Link to="/home" className="backToMain-button">
          Back to main page »
        </Link>
      </div>
    </div>
  );
}
