import axios from "axios";

// Servicio para hacer solicitudes HTTP

// Obtener Países:
const getCountries = async () => {
  try {
    const response = await axios.get("http://localhost:3001/countries");
    return response.data;
  } catch (error) {
    if (error.response && error.response.status) {
      const statusCode = error.response.status;
      switch (statusCode) {
        case 400:
          throw new Error(
            "Hubo un error inesperado en la solicitud. Por favor, intente recargar la página."
          );
        case 404:
          throw new Error(
            "No se encontraron países. Es posible que la lista de países no esté disponible en este momento."
          );
        case 500:
          throw new Error(
            "Ocurrió un error en el servidor. Por favor, intente nuevamente más tarde."
          );
        default:
          throw new Error(
            "Ocurrió un error inesperado. Por favor, contacte al soporte técnico para obtener ayuda."
          );
      }
    } else {
      throw new Error(
        "No se pudo completar la solicitud. Por favor, verifique su conexión a Internet o inténtelo más tarde."
      );
    }
  }
};

// Obtener País por Id:
const getCountryById = async (idPais) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/countries/${idPais}`
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status) {
      const statusCode = error.response.status;
      switch (statusCode) {
        case 400:
          throw new Error(
            "Hubo un error inesperado en la solicitud. Por favor, intente recargar la página."
          );
        case 404:
          throw new Error("No se encontro el país específico.");
        case 500:
          throw new Error(
            "Ocurrió un error en el servidor. Por favor, intente nuevamente más tarde."
          );
        default:
          throw new Error(
            "Ocurrió un error inesperado. Por favor, contacte al soporte técnico para obtener ayuda."
          );
      }
    } else {
      throw new Error(
        "No se pudo completar la solicitud. Por favor, verifique su conexión a Internet o inténtelo más tarde."
      );
    }
  }
};

// Obtener Países por coincidencias de nombre:
const getCountryByName = async (name) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/countries?name=${name}`
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.status) {
      const statusCode = error.response.status;
      switch (statusCode) {
        case 400:
          throw new Error(
            "Hubo un error inesperado en la solicitud. Por favor, intente recargar la página."
          );
        case 404:
          throw new Error(
            "Ningún país coincide con el nombre que ha facilitado."
          );
        case 500:
          throw new Error(
            "Ocurrió un error en el servidor. Por favor, intente nuevamente más tarde."
          );
        default:
          throw new Error(
            "Ocurrió un error inesperado. Por favor, contacte al soporte técnico para obtener ayuda."
          );
      }
    } else {
      throw new Error(
        "No se pudo completar la solicitud. Por favor, verifique su conexión a Internet o inténtelo más tarde."
      );
    }
  }
};

export { getCountries, getCountryById, getCountryByName };
