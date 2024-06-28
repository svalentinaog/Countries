const {
  putActivityController,
} = require("../../controllers/activities/putActivityController");
const Validator = require("../../utils/Validations");

const putActivityHandler = async (req, res) => {
  const { id } = req.params;

  const { name, difficulty, duration, season, countryId } = req.body;

  try {
    const validatedName = Validator.isString(name, "Name", 50);
    const validatedDifficulty = Validator.isNumber(difficulty, "Difficulty", 5);
    const validatedDuration = Validator.isNumber(duration, "Duration", 24);
    const validatedSeason = Validator.isString(season, "Season", 15);
    const validatedCountryId = Validator.isString(countryId, "Country ID", 3);

    const updatedActivity = await putActivityController(
      id,
      validatedName,
      validatedDifficulty,
      validatedDuration,
      validatedSeason,
      validatedCountryId
    );

    res.status(200).json(updatedActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { putActivityHandler };
