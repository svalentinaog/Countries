import "../styles/Error404.css";
import React from "react";

export default function Error404() {
  return (
    <div className="error-container">
      <h1>S O R R Y</h1>
      <div>
        <span className="error4">4</span>
        <img
          src="/images/countryNotFound.png"
          alt="countryNotFound"
          className="error-image"
        />
        <span className="error4">4</span>
      </div>
      <div className="box-err"></div>
      <p className="p-error">Country/s not found</p>
    </div>
  );
}
