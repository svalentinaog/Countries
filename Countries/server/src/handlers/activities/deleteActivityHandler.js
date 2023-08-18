const {
  deleteActivityController,
} = require("../../controllers/activities/deleteActivityController");

// Manejador de la ruta que manejará la solicitud para eliminar una actividad por su ID.
const deleteActivityHandler = async (req, res) => {
  // Extraemos el parámetro 'id' de los parámetros de la solicitud.
  const { id } = req.params;

  try {
    // Luego llamamos al controlador 'deleteActivityController' pasándole el ID de la actividad a eliminar.
    const deletedActivity = await deleteActivityController(id);

    // Respondemos con un código de estado 200 (OK) y enviamos la actividad eliminada como respuesta en formato JSON.
    res.status(200).json(deletedActivity);
  } catch (error) {
    // Si ocurre un error durante el proceso, respondemos con un código de estado 400 y enviamos el mensaje de error en formato JSON.
    res.status(400).json({ error: error.message });
  }
};

module.exports = { deleteActivityHandler };
