import axios from "axios";

// Servicio para hacer solicitudes HTTP

// Crear Actividad Turistica
const postActivity = async (body) => {
  try {
    const response = await axios.post("http://localhost:3001/activities", body);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status) {
      const statusCode = error.response.status;
      switch (statusCode) {
        case 400:
          throw new Error(
            "Hubo un error inesperado durante el envio de la información. Por favor, intente recargar la página."
          );
        case 404:
          throw new Error("Error al momento de crear la actividad turistica");
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

// Obtener Actividades Turisticas
const getActivities = async () => {
  try {
    const response = await axios.get("http://localhost:3001/activities");
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
            "No se encontraron actividades turisticas. Es posible que la lista de actividades turisticas no esté disponible en este momento."
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

const deleteActivity = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/activities/${id}`);
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
            "Erro al eliminar la actividad turistica específica."
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

const updateActivity = async (activityId, updatedData) => {
  try {
    await axios.put(
      `http://localhost:3001/activities/${activityId}`,
      updatedData
    );
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
            "Erro al actualizar la actividad turistica específica."
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

export { postActivity, getActivities, deleteActivity, updateActivity };
