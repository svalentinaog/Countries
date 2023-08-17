import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  copyCountries: [],
  activities: [],
  isLoading: false,
  error: null,
  sortOrder: "asc", // Puede ser 'asc' o 'desc'
};

// Creación del slice de Countries
export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    saveCountries: (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
      state.copyCountries = action.payload;
      console.log("Soy la ACTIONS", action.payload);
    },

    saveCountryById: (state, action) => {
      state.countryById = action.payload;
    },

    saveActivities: (state, action) => {
      state.isLoading = false;
      state.activities = action.payload;
    },

    setFilterContinent: (state, action) => {
      state.countries =
        action.payload === "all"
          ? state.copyCountries
          : state.copyCountries.filter((e) => e.continent === action.payload);
      console.log("Soy el Continente! 🐝", action.payload);
    },

    setFilterActivity: (state, action) => {
      const payloadId = Number(action.payload);
      const filteredCountries = [...state.copyCountries].filter((country) =>
        country.Activities.find(
          (activity) => Number.isInteger(payloadId) && activity.id === payloadId
        )
      );
      state.countries = filteredCountries;
      console.log("Soy la Actividad! 🐝", filteredCountries);
      console.log("Soy la Actividad! 🐝", payloadId);
    },

    setFilterPopulation: (state, action) => {
      let sortedPopulation = [...state.countries];
      sortedPopulation.sort((a, b) => {
        if (action.payload === "max") {
          return b.population - a.population;
        } else if (action.payload === "min") {
          return a.population - b.population;
        }
      });
      state.countries = sortedPopulation;
      console.log("Soy la Población! 🐝", sortedPopulation);
    },

    setSortOrder: (state, action) => {
      let sortedCountries = [...state.countries];
      sortedCountries.sort((a, b) => {
        if (action.payload === "asc") {
          return a.name.localeCompare(b.name);
        } else if (action.payload === "desc") {
          return b.name.localeCompare(a.name);
        }
      });
      state.countries = sortedCountries;
      console.log("Soy el Orden! 🐝", action.payload);
    },

    searchFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  startLoading,
  saveCountries,
  saveActivities,
  saveCountryById,
  totalCountries,
  searchFailure,
  setSortOrder,
  setFilterContinent,
  setFilterPopulation,
  setFilterActivity,
} = countrySlice.actions;

export default countrySlice.reducer;
