const {
  getActivitiesController,
} = require("../../controllers/activities/getActivitiesController");

const getActivitiesHandler = async (req, res) => {
  try {
    // Llamamos al controlador para obtener las actividades
    const activities = await getActivitiesController(); 
    // Enviamos una respuesta con código de estado 200 y las actividades en formato JSON
    res.status(200).json(activities); 
  } catch (error) {
    // Si ocurre un error en el controlador, enviamos una respuesta con código de estado 400 y el mensaje de error en formato JSON
    res.status(400).json({ error: error.message }); 
  }
};

module.exports = { getActivitiesHandler };
