const { Activity } = require("../../db");

// Controlador asincrónico para eliminar una actividad por su ID.
const deleteActivityController = async (activityId) => {
  try {
    // Buscar la actividad por su ID
    const activity = await Activity.findByPk(activityId);

    // Si no se encuentra la actividad, lanzar un error.
    if (!activity) {
      throw new Error("La actividad no existe");
    }

    // Eliminar la actividad utilizando el método 'destroy'.
    await activity.destroy();

    console.log("Actividad eliminada exitosamente");

    return activity;
  } catch (error) {
    console.log(error, "Error al eliminar la actividad");
    throw error;
  }
};

module.exports = { deleteActivityController };
