import "../styles/Card.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ country }) {
  // Función para manejar el error de carga de imagen 🖼️
  const handleImageError = (event) => {
    event.target.onerror = null; // Evita el bucle infinito al asignar null al evento onerror
    event.target.src = "/countryNotFound.png"; // Carga una imagen por defecto en caso de error
  };

  const chainClipping = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + '...'; 
    }
    return str;
    // El método substring se utiliza para extraer una porción de una cadena. 
    // Los parámetros que se pasan son los índices de inicio y final. 
  };

  return (
    <Link to={`/country/${country.id}`} style={{ textDecoration: "none" }}>
      <div className="card-container">
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
      </div>
    </Link>
  );
}
