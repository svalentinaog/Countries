const { Activity } = require("../../db");

const postActivityController = async (
  name,
  difficulty,
  duration,
  season,
  countryId
) => {
  try {
    const existingActivity = await Activity.findOne({
      where: { name },
    });

    if (existingActivity) {
      throw new Error("La actividad turística ya existe");
    }

    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });

    console.log("Se ha creado la actividad con éxito 😇");

    await newActivity.setCountries(countryId);

    return newActivity;
    
  } catch (error) {
    console.log(error, "Fallo el crear la actividad 😡");
    throw error; 
  }
};

module.exports = { postActivityController };
