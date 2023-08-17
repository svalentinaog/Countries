// Importamos el modelo 'Activity' desde el archivo 'db.js' ubicado en una carpeta superior (presumiblemente es el modelo que representa la tabla de actividades en la base de datos)
const { Activity } = require("../../db");

// Definimos un controlador asincrónico para crear una nueva actividad
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
    throw error; // Lanza el error para manejarlo en el handler
  }
};


// Exportamos el controlador para que pueda ser utilizado en otro lugar, por ejemplo, en el manejador de una ruta que crea nuevas actividades.
module.exports = { postActivityController };
