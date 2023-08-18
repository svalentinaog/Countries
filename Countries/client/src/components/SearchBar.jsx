import "../styles/SearchBar.css";

import Selector from "./Selector";
import Input from "./Input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countryByName,
  order,
  activities,
  filteredContinent,
  filteredPopulation,
  filteredActivity,
} from "../redux/slice/countryActions";

export default function SearchBar({ setCurrentPage }) {
  // Obtener la lista de actividades de los países desde el estado global
  const countriesActivity = useSelector((state) => state.country.activities);
  const [countryName, setCountryName] = useState("");

  // Inicializar el dispatcher
  const dispatch = useDispatch();

  // Cargar la lista de actividades al cargar el componente
  useEffect(() => {
    dispatch(activities());
  }, []);

  // Manejar la búsqueda de país
  const findCountry = (e) => {
    setCurrentPage(0); // Reiniciar la página al realizar una búsqueda
    setCountryName(e.target.value);
    dispatch(countryByName(e.target.value)); // Enviar el nombre del país a buscar
  };

  // Manejadores de filtros

  const handleSorted = (e) => {
    dispatch(order(e.target.value)); // Enviar el valor del ordenamiento seleccionado
  };

  const handleContinent = (e) => {
    setCurrentPage(0); // Reiniciar la página al seleccionar un continente
    dispatch(filteredContinent(e.target.value)); // Enviar el filtro de continente seleccionado
  };

  const handlePopulation = (e) => {
    setCurrentPage(0); // Reiniciar la página al seleccionar un continente
    dispatch(filteredPopulation(e.target.value)); // Enviar el filtro de población seleccionado
  };

  const handleActivity = (e) => {
    setCurrentPage(0); // Reiniciar la página al seleccionar una actividad
    dispatch(filteredActivity(e.target.value)); // Enviar la actividad seleccionada
  };

  // Función para limpiar los filtros y recargar la página
  const clean = () => {
    window.location.reload();
  };

  return (
    <div className="search-bar">
      {/* Sección de encabezado */}
      <div className="text-header">
        <h1>Countries</h1>
        <p>Get detailed information on each country.</p>
      </div>
      {/* Contenedor de búsqueda */}
      <div className="search-container">
        {/* Componente Input para el campo de búsqueda */}
        <Input
          value={countryName}
          onChange={findCountry}
          placeholder="Country search..."
          id="countryInput"
        />

        <Selector
          id="filteredSelector"
          onChange={handleSorted}
          options={[
            { name: "Sort", value: "seleccione" },
            { name: "Ascending", value: "asc" },
            { name: "Descending", value: "desc" },
          ]}
        />

        <Selector
          id="filteredSelector"
          onChange={handleContinent}
          options={[
            { name: "Continent", value: "seleccione" },
            { name: "Asia", value: "Asia" },
            { name: "South America", value: "South America" },
            { name: "North America", value: "North America" },
            { name: "Europe", value: "Europe" },
            { name: "Africa", value: "Africa" },
            { name: "Antarctica", value: "Antarctica" },
            { name: "Oceania", value: "Oceania" },
          ]}
        />

        <Selector
          id="filteredSelector"
          onChange={handlePopulation}
          options={[
            { name: "Population", value: "seleccione" },
            { name: "Mayor", value: "max" },
            { name: "Menor", value: "min" },
          ]}
        />

        {countriesActivity && (
          <Selector
            id="filteredSelector"
            onChange={handleActivity}
            name="activity"
            options={[
              { name: "Por Actividad", value: "seleccione" },
              ...countriesActivity.map((activity) => {
                console.log(activity);
                return {
                  name: activity.name,
                  value: activity.id,
                  key: activity.id,
                };
              }),
            ]}
          />
        )}

        {/* Botón para limpiar los filtros y recargar la página */}
        <button onClick={clean} className="button-refresh">
          Refresh
        </button>
      </div>
    </div>
  );
}
