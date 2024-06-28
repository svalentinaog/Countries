const { getCountryByIdController } = require("../../controllers/countries/getCountryByIdController");

const getCountryByIdHandler = async (req, res) => {
  const { idPais } = req.params;
  try {
    const country = await getCountryByIdController(idPais);

    if (!country) throw new Error("Country not found 🙅‍♀️");

    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCountryByIdHandler };
