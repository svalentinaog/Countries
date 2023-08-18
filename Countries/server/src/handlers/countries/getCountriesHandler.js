const {
  getCountriesController,
} = require("../../controllers/countries/getCountriesController");

// Manejador de la ruta para obtener países.
const getCountriesHandler = async (req, res) => {
  // Extraemos el parámetro de consulta 'name' de la solicitud.
  const { name } = req.query;

  try {
    // Luego lamamos al controlador 'getCountriesController' pasándole el parámetro 'name'.
    const country = await getCountriesController(name);

    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCountriesHandler };
