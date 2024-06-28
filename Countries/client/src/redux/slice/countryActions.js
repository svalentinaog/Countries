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

export const countries = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const data = await getCountries(); 
      console.log("Data from API:", data);
      dispatch(saveCountries(data)); 
    } catch (error) {
      dispatch(saveCountries([]));
      dispatch(searchFailure(error.message)); 
    }
  };
};

export const countryById = (idPais) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const country = await getCountryById(idPais); 
      dispatch(saveCountryById(country)); 
    } catch (error) {
      dispatch(searchFailure(error.message)); 
    }
  };
};

export const countryByName = (name) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const data = await getCountryByName(name); 
      dispatch(saveCountries(data)); 
    } catch (error) {
      dispatch(saveCountries([]));
      dispatch(searchFailure(error.message)); 
    }
  };
};

export const activities = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const data = await getActivities(); 
      dispatch(saveActivities(data)); 
    } catch (error) {
      dispatch(saveActivities([]));
      dispatch(searchFailure(error.message)); 
    }
  };
};

export const deleteActivityById = (activityId) => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      await deleteActivity(activityId); 
    } catch (error) {
      dispatch(searchFailure(error.message)); 
    }
  };
};

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

export const order = (sort) => {
  return async (dispatch) => {
    dispatch(setSortOrder(sort))
  }
};

export const filteredContinent = (continent) => {
  return async (dispatch) => {
    dispatch(setFilterContinent(continent))
  }
};

export const filteredPopulation = (population) => {
  return async (dispatch) => {
    dispatch(setFilterPopulation(population))
  }
};

export const filteredActivity = (activity) => {
  return async (dispatch) => {
    dispatch(setFilterActivity(activity))
  }
};
