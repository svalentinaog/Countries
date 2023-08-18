import axios from "axios";
import "../styles/DetailPage.css";
import BaseLayout from "../components/BaseLayout";
import ActivityDetail from "../components/ActivityDetail";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader"; // Importa el componente Loader

export default function DetailPage() {
  const { idPais } = useParams(); // Obtener los parámetros de la URL
  const [country, setCountry] = useState(null); // Definir el estado local para almacenar los datos del País
  const [activities, setActivities] = useState([]);
  const [hasActivities, setHasActivities] = useState(false); // Bandera
  const [isLoading, setIsLoading] = useState(true); // Estado Loader

  // Obtener los datos del País por su ID `idPais` 
  useEffect(() => {
    setIsLoading(true);
    axios(`http://localhost:3001/countries/${idPais}`).then(({ data }) => {
      if (data) {
        setCountry(data);
        const countryActivities = data.Activities;
        setActivities(countryActivities);
        setHasActivities(countryActivities.length > 0); // Actualizar el estado
        setIsLoading(false); // Establecer isLoading a false después de obtener los datos
      }
    });
  }, [idPais]);

  // Ir atrás
  const goBack = () => {
    window.history.back();
  };

  return (
    <BaseLayout>
      {isLoading ? ( // Renderiza el Loader si isLoading es true
        <Loader />
      ) : (
        <div className="detail-container">
          <div className="detail-page">
            {/* Detalle del país */}
            <div className="detailCountry">
              {/* Titulo, parrafo, y botón de ir atrás */}
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
                {/*☘️ Imagen del País especifico */}
                <div className="detailImage">
                  {country && (
                    <img
                      src={country.image}
                      alt={country.name}
                      className="detailImage-space"
                    />
                  )}
                </div>

                {/* Datos del País */}
                <div className="country-information">
                  {/*✅ IdPais */}
                  <div className="detail-row">
                    <span className="detail-property" id="id-detail">
                      N.º{country?.id}
                    </span>
                  </div>

                  {/*✅ Nombre */}
                  <div className="detail-row">
                    <span className="detail-property" id="name-detail">
                      {country?.name}
                    </span>
                  </div>

                  {/*✅ Continente */}
                  <div className="detail-row">
                    <span className="detail-value">
                      Continent: {country?.continent}
                    </span>
                  </div>

                  {/*✅ Capital */}
                  <div className="detail-row">
                    <span className="detail-value">
                      Capital: {country?.capital}
                    </span>
                  </div>

                  {/*✅ Subregión (si tiene) */}
                  <div className="detail-row">
                    <span className="detail-value">
                      Subregion: {country?.subregion}
                    </span>
                  </div>

                  {/*✅ Área (si tiene) */}
                  <div className="detail-row">
                    <span className="detail-value">
                      N.º Area: {country?.area}
                    </span>
                  </div>

                  {/*✅ Población */}
                  <div className="detail-row">
                    <span className="detail-value">
                      N.º Population: {country?.population}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Actividades Turisticas */}
            <div className="container-activities-cards">
              <div className="titleActivities">
                <h2>Tourist activities:</h2>
              </div>
              {hasActivities ? ( // Renderizar solo si hay actividades
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
