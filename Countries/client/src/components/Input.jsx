import "../styles/Input.css";
import React from "react";

export default function Input({ onChange, placeholder }) {
  return (
    <div className="icon-container">
      <input
        className="input"
        placeholder={placeholder}
        onChange={onChange} // Controlador de eventos para el cambio del valor del campo
      />
      <i className="material-icons search-icon">search</i>
    </div>
  );
}
