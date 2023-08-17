import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./slice/countrySlice"; // Importación del slice de Redux

export const store = configureStore({
  reducer: {
    country: countryReducer, // Slice
  },
});
