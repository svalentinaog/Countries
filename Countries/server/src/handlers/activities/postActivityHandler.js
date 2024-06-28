// Importamos el controlador 'postActivityController' y la clase Validator desde sus respectivos archivos
const {
  postActivityController,
} = require("../../controllers/activities/postActivityController");
const Validator = require("../../utils/Validations");

const postActivityHandler = async (req, res) => {
  const { name, difficulty, duration, season, countryId } = req.body;

  try {
    const validatedName = Validator.isString(name, "Name", 50);
    const validatedDifficulty = Validator.isNumber(difficulty, "Difficulty", 5);
    const validatedDuration = Validator.isNumber(duration, "Duration", 24);
    const validatedSeason = Validator.isString(season, "Season", 15);
    const validatedCountryId = Validator.isArray(countryId, "Country ID");

    const newActivity = await postActivityController(
      validatedName,
      validatedDifficulty,
      validatedDuration,
      validatedSeason,
      validatedCountryId
    );

    res.status(200).json(newActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postActivityHandler };
