// Importamos el controlador para obtener las actividades
const {
  getActivitiesController,
} = require("../../controllers/activities/getActivitiesController");

// Definimos el manejador de la ruta para obtener las actividades
const getActivitiesHandler = async (req, res) => {
  try {
    const activities = await getActivitiesController(); // Llamamos al controlador para obtener las actividades
    res.status(200).json(activities); // Enviamos una respuesta con código de estado 200 y las actividades en formato JSON
  } catch (error) {
    res.status(400).json({ error: error.message }); // Si ocurre un error en el controlador, enviamos una respuesta con código de estado 400 y el mensaje de error en formato JSON
  }
};

// Exportamos el manejador para que pueda ser utilizado en otro lugar, por ejemplo, en la definición de rutas
module.exports = { getActivitiesHandler };
