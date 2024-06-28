const {
  getCountriesController,
} = require("../../controllers/countries/getCountriesController");

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;

  try {
    const country = await getCountriesController(name);

    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCountriesHandler };
