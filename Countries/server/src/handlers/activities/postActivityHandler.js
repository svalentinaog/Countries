// Importamos el controlador 'postActivityController' y la clase Validator desde sus respectivos archivos
const {
  postActivityController,
} = require("../../controllers/activities/postActivityController");
const Validator = require("../../utils/Validations");

// Manejador de la ruta para crear una nueva actividad
const postActivityHandler = async (req, res) => {
  // Extraemos los datos necesarios para crear una nueva actividad desde el cuerpo de la solicitud
  const { name, difficulty, duration, season, countryId } = req.body;

  try {
    // Realizar validaciones antes de pasar al controlador
    const validatedName = Validator.isString(name, "Name", 50);
    const validatedDifficulty = Validator.isNumber(difficulty, "Difficulty", 5);
    const validatedDuration = Validator.isNumber(duration, "Duration", 24);
    const validatedSeason = Validator.isString(season, "Season", 15);
    const validatedCountryId = Validator.isArray(countryId, "Country ID");

    // Luego llamamos al controlador 'postActivityController' para crear la nueva actividad en la base de datos
    const newActivity = await postActivityController(
      validatedName,
      validatedDifficulty,
      validatedDuration,
      validatedSeason,
      validatedCountryId
    );

    // Si la creación es exitosa, enviamos una respuesta con código de estado 200 y la nueva actividad creada en formato JSON
    res.status(200).json(newActivity);
  } catch (error) {
    // Si ocurre algún error, enviamos una respuesta con código de estado 400 y el mensaje de error en formato JSON
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postActivityHandler };
