// Importamos el controlador 'putActivityController' desde el archivo de controladores que maneja la actualización de actividades.
const {
  putActivityController,
} = require("../../controllers/activities/putActivityController");
const Validator = require("../../utils/Validations");

// Definimos el manejador de la ruta para actualizar una actividad existente
const putActivityHandler = async (req, res) => {
   // Ya que el ID de la actividad se pasa como parámetro en la URL (por ejemplo, /activities/:id)
   const { id } = req.params;
   
  // Extraemos los datos necesarios para actualizar la actividad desde el cuerpo de la solicitud (req.body)
  const { name, difficulty, duration, season, countryId } = req.body;
 
  try {
    // Realizar validaciones antes de pasar al controlador
    const validatedName = Validator.isString(name, "Name", 50);
    const validatedDifficulty = Validator.isNumber(difficulty, "Difficulty", 5);
    const validatedDuration = Validator.isNumber(duration, "Duration", 24);
    const validatedSeason = Validator.isString(season, "Season", 15);
    const validatedCountryId = Validator.isString(countryId, "Country ID", 3);

    // Llamamos al controlador 'putActivityController' para actualizar la actividad en la base de datos, utilizando los datos validados
    const updatedActivity = await putActivityController(
      id,
      validatedName,
      validatedDifficulty,
      validatedDuration,
      validatedSeason,
      validatedCountryId
    );

    // Si la actualización de la actividad es exitosa, enviamos una respuesta con código de estado 200 y la actividad actualizada en formato JSON
    res.status(200).json(updatedActivity);
  } catch (error) {
    // Si ocurre algún error durante la actualización de la actividad (por ejemplo, si la actividad no existe o hay un error en la base de datos), enviamos una respuesta con código de estado 400 y el mensaje de error en formato JSON
    res.status(400).json({ error: error.message });
  }
};

// Exportamos el manejador para que pueda ser utilizado en otro lugar, por ejemplo, en la definición de rutas de la aplicación Express para manejar las solicitudes HTTP de actualización de actividades.
module.exports = { putActivityHandler };
