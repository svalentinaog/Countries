const { Activity } = require("../../db");

const putActivityController = async (
  idPais,
  name,
  difficulty,
  duration,
  season,
  countryId
) => {
  try {
    const existingActivity = await Activity.findByPk(idPais);

    if (!existingActivity) {
      throw new Error("La actividad que intentas actualizar no existe 🙅‍♀️");
    }

    existingActivity.name = name;
    existingActivity.difficulty = difficulty;
    existingActivity.duration = duration;
    existingActivity.season = season;

    await existingActivity.setCountries(countryId);

    await existingActivity.save();

    console.log(existingActivity, "🐝")
    return existingActivity;
  } catch (error) {
    console.log(error, "Fallo al actualizar la actividad 😡");
    throw error;
  }
};

module.exports = { putActivityController };
