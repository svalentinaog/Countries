const { Activity } = require("../../db");

// Controlador asincrónico para crear una nueva actividad
const postActivityController = async (
  name,
  difficulty,
  duration,
  season,
  countryId
) => {
  try {
    // Verificar si la actividad ya existe por nombre
    const existingActivity = await Activity.findOne({
      where: { name },
    });

    // Si ya existe, lanzamos un error
    if (existingActivity) {
      throw new Error("La actividad turística ya existe");
    }

    // Si la actividad no existe, procedemos a crearla
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
