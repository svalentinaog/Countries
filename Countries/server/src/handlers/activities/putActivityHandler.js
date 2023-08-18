const {
  putActivityController,
} = require("../../controllers/activities/putActivityController");
const Validator = require("../../utils/Validations");

// Manejador de la ruta para actualizar una actividad existente
const putActivityHandler = async (req, res) => {
  // Extraer el Id de la actividad que se pasa como parámetro en la URL /activities/:id
  const { id } = req.params;

  // Extraemos los datos necesarios para actualizar la actividad desde el cuerpo de la solicitud
  const { name, difficulty, duration, season, countryId } = req.body;

  try {
    // Realizar validaciones antes de pasarlas al controlador
    const validatedName = Validator.isString(name, "Name", 50);
    const validatedDifficulty = Validator.isNumber(difficulty, "Difficulty", 5);
    const validatedDuration = Validator.isNumber(duration, "Duration", 24);
    const validatedSeason = Validator.isString(season, "Season", 15);
    const validatedCountryId = Validator.isString(countryId, "Country ID", 3);

    // Luego llamamos al controlador 'putActivityController' para actualizar la actividad en la base de datos
    const updatedActivity = await putActivityController(
      id,
      validatedName,
      validatedDifficulty,
      validatedDuration,
      validatedSeason,
      validatedCountryId
    );

    // Si la actualización es exitosa, enviamos una respuesta con código de estado 200 y la actividad actualizada en formato JSON
    res.status(200).json(updatedActivity);
  } catch (error) {
    // Si ocurre algún error, enviamos una respuesta con código de estado 400 y el mensaje de error en formato JSON
    res.status(400).json({ error: error.message });
  }
};

module.exports = { putActivityHandler };
