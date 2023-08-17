const { Activity } = require("../../db");

const deleteActivityController = async (activityId) => {
  try {
    // Buscar la actividad por su ID
    const activity = await Activity.findByPk(activityId);

    if (!activity) {
      throw new Error("La actividad no existe");
    }

    // Eliminar la actividad
    await activity.destroy();

    console.log("Actividad eliminada exitosamente");

    return activity;
  } catch (error) {
    console.log(error, "Error al eliminar la actividad");
    throw error;
  }
};

module.exports = { deleteActivityController };
