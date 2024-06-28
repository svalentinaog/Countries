import "../styles/LogoutPage.css";
import React from "react";
import { Link } from "react-router-dom";

export default function LogoutPage() {
  return (
    <div className="container-LogoutPage">
      <div className="LogoutPage-text-and-button">
        <h1 className="logoutPage-text">Thank you for your visit!</h1>
        <p className="logoutPage-paragraph">
          We hope you enjoyed your experience with our application.
        </p>
        <Link to="/home" className="backToMain-button">
          Back to main page »
        </Link>
      </div>
    </div>
  );
}
