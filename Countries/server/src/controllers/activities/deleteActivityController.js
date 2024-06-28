const { Activity } = require("../../db");

const deleteActivityController = async (activityId) => {
  try {
    const activity = await Activity.findByPk(activityId);

    if (!activity) {
      throw new Error("La actividad no existe");
    }

    await activity.destroy();

    console.log("Actividad eliminada exitosamente");

    return activity;
  } catch (error) {
    console.log(error, "Error al eliminar la actividad");
    throw error;
  }
};

module.exports = { deleteActivityController };
