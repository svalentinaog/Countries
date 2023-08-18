const {
  getActivityByIdController,
} = require("../../controllers/activities/getActivityByIdController");

// Manejador de la ruta que manejará la solicitud para obtener una actividad por su ID.
const getActivityByIdHandler = async (req, res) => {
  // Extraemos el parámetro 'id' de los parámetros de la solicitud.
  const { id } = req.params;

  try {
    // Llamamos al controlador 'getActivityByIdController' pasándole el ID de la actividad.
    const activity = await getActivityByIdController(id);

    // Si no se encuentra la actividad, lanzamos un error.
    if (!activity) throw new Error("Activity not found 🙅‍♀️");

    // Respondemos con un código de estado 200 y enviamos la actividad como respuesta en formato JSON.
    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getActivityByIdHandler };
