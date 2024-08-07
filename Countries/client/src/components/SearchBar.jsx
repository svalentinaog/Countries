import "../styles/SearchBar.css";
import React, { useEffect, useState } from "react";
import Selector from "./Selector";
import Input from "./Input";
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
  const countriesActivity = useSelector((state) => state.country.activities);
  const [countryName, setCountryName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activities());
  }, []);

  const findCountry = (e) => {
    setCurrentPage(0); 
    setCountryName(e.target.value);
    dispatch(countryByName(e.target.value));
  };

  const handleSorted = (e) => {
    dispatch(order(e.target.value)); 
  };

  const handleContinent = (e) => {
    setCurrentPage(0); 
    dispatch(filteredContinent(e.target.value)); 
  };

  const handlePopulation = (e) => {
    setCurrentPage(0); 
    dispatch(filteredPopulation(e.target.value)); 
  };

  const handleActivity = (e) => {
    setCurrentPage(0); 
    dispatch(filteredActivity(e.target.value)); 
  };

  const clean = () => {
    window.location.reload();
  };

  return (
    <div className="search-bar">
      <div className="text-header">
        <h1>Countries</h1>
        <p>Get detailed information on each country.</p>
      </div>
      <div className="search-container">
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

        <button onClick={clean} className="button-refresh">
          Refresh
        </button>
      </div>
    </div>
  );
}
