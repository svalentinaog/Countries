import {
  startLoading,
  saveCountries,
  saveActivities,
  saveCountryById,
  searchFailure,
  setSortOrder,
  setFilterContinent,
  setFilterPopulation,
  setFilterActivity
} from "./countrySlice";

import {
  getCountries,
  getCountryById,
  getCountryByName,
} from "../../services/countries";

import { getActivities, deleteActivity, updateActivity } from "../../services/activities";

// Acción para obtener los Países
export const countries = () => {
  return async (dispatch) => {
    dispatch(startLoading()); // Iniciar la carga de datos
    try {
      const data = await getCountries(); // Llamar a la función del servicio para obtener los Países
      console.log("Data from API:", data);
      dispatch(saveCountries(data)); // Almacenar los datos obtenidos exitosamente en el estado "countries"
    } catch (error) {
      dispatch(saveCountries([]));
      dispatch(searchFailure(error.message)); // Almacenar el mensaje de error en caso de fallo
    }
  };
};

// Acción para obtener el País especificado por su id
export const countryById = (idPais) => {
  return async (dispatch) => {
    dispatch(startLoading()); // Iniciar la carga de datos
    try {
      const country = await getCountryById(idPais); // Llamar a la función del servicio para obtener el País especifico
      dispatch(saveCountryById(country)); // Almacenar los datos del País obtenido con exito en el estado "countryById"
    } catch (error) {
      dispatch(searchFailure(error.message)); // Almacenar el mensaje de error en caso de fallo
    }
  };
};

// Acción para obtener el País consultado por su nombre
export const countryByName = (name) => {
  return async (dispatch) => {
    dispatch(startLoading()); // Iniciar la carga de datos
    try {
      const data = await getCountryByName(name); // Llamar a la función del servicio para obtener los Países que coincidieron con la busquedad por nombre
      dispatch(saveCountries(data)); // Almacenar los datos obtenidos exitosamente en el estado "countries"
    } catch (error) {
      dispatch(saveCountries([]));
      dispatch(searchFailure(error.message)); // Almacenar el mensaje de error en caso de fallo
    }
  };
};

// Acción para obtener las actividades turisticas
export const activities = () => {
  return async (dispatch) => {
    dispatch(startLoading()); // Iniciar la carga de datos
    try {
      const data = await getActivities(); // Llamar a la función del servicio para obtener las actividades
      dispatch(saveActivities(data)); // Almacenar los datos obtenidos exitosamente en el estado "Activities"
    } catch (error) {
      dispatch(saveActivities([]));
      dispatch(searchFailure(error.message)); // Almacenar el mensaje de error en caso de fallo
    }
  };
};

// Acción para eliminar una actividad turistica especifica
export const deleteActivityById = (activityId) => {
  return async (dispatch) => {
    dispatch(startLoading()); // Iniciar la carga de datos
    try {
      await deleteActivity(activityId); // Llamar a la función del servicio para obtener el País especifico
    } catch (error) {
      dispatch(searchFailure(error.message)); // Almacenar el mensaje de error en caso de fallo
    }
  };
};

// Acción para actualizar una actividad turistica especifica
export const updateActivityById = (activityId, updateDate) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await updateActivity(activityId, updateDate)
      dispatch(saveActivities(response.data));
    } catch (error) {
      dispatch(searchFailure(error.message));
    }
  };
};

// Acción para ordenar de forma ASC y DESC
export const order = (sort) => {
  return async (dispatch) => {
    dispatch(setSortOrder(sort))
  }
};

// Acción para filtrar por Continente
export const filteredContinent = (continent) => {
  return async (dispatch) => {
    dispatch(setFilterContinent(continent))
  }
};

// Acción para filtrar por Poblacion
export const filteredPopulation = (population) => {
  return async (dispatch) => {
    dispatch(setFilterPopulation(population))
  }
};

// Acción para filtrar por Poblacion
export const filteredActivity = (activity) => {
  return async (dispatch) => {
    dispatch(setFilterActivity(activity))
  }
};
