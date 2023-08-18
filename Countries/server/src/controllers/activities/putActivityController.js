const { Activity } = require("../../db");

// Controlador asincrónico para actualizar una actividad existente
const putActivityController = async (
  idPais,
  name,
  difficulty,
  duration,
  season,
  countryId
) => {
  try {
    // Buscamos la actividad existente en la base de datos por su ID
    const existingActivity = await Activity.findByPk(idPais);

    // Verificamos si la actividad existe en la base de datos
    if (!existingActivity) {
      throw new Error("La actividad que intentas actualizar no existe 🙅‍♀️");
    }

    // Actualizamos los campos de la actividad con los nuevos valores proporcionados
    existingActivity.name = name;
    existingActivity.difficulty = difficulty;
    existingActivity.duration = duration;
    existingActivity.season = season;

    // Asociamos la actividad con el país proporcionado
    await existingActivity.setCountries(countryId);

    // Guardamos los cambios en la base de datos
    await existingActivity.save();

    console.log(existingActivity, "🐝")
    return existingActivity;
  } catch (error) {
    console.log(error, "Fallo al actualizar la actividad 😡");
    throw error;
  }
};

module.exports = { putActivityController };
