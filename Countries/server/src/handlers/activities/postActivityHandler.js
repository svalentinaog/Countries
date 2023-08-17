// Importamos el controlador 'postActivityController' y la clase Validator desde sus respectivos archivos
const {
  postActivityController,
} = require("../../controllers/activities/postActivityController");
const Validator = require("../../utils/Validations");

// Definimos el manejador de la ruta para crear una nueva actividad
const postActivityHandler = async (req, res) => {
  // Extraemos los datos necesarios para crear una nueva actividad desde el cuerpo de la solicitud (req.body)
  console.log(req.body)
  const { name, difficulty, duration, season, countryId } = req.body;
  console.log(name, difficulty, duration, season, countryId, "🐝😇")
  try {
    // Realizar validaciones antes de pasar al controlador
    const validatedName = Validator.isString(name, "Name", 50);
    const validatedDifficulty = Validator.isNumber(difficulty, "Difficulty", 5);
    const validatedDuration = Validator.isNumber(duration, "Duration", 24);
    const validatedSeason = Validator.isString(season, "Season", 15);
    const validatedCountryId = Validator.isArray(countryId, "Country ID");

    // Llamamos al controlador 'postActivityController' para crear la nueva actividad en la base de datos, utilizando los datos validados
    const newActivity = await postActivityController(
      validatedName,
      validatedDifficulty,
      validatedDuration,
      validatedSeason,
      validatedCountryId
    );

    // Si la creación de la actividad es exitosa, enviamos una respuesta con código de estado 200 y la nueva actividad creada en formato JSON
    res.status(200).json(newActivity);
  } catch (error) {
    // Si ocurre algún error durante la creación de la actividad, enviamos una respuesta con código de estado 400 y el mensaje de error en formato JSON
    res.status(400).json({ error: error.message });
  }
};

// Exportamos el manejador para que pueda ser utilizado en otro lugar, por ejemplo, en la definición de rutas de la aplicación Express para manejar las solicitudes HTTP de creación de actividades.
module.exports = { postActivityHandler };
