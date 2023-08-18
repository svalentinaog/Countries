const { getCountryByIdController } = require("../../controllers/countries/getCountryByIdController");

// Manejador de la ruta para obtener un país por su ID.
const getCountryByIdHandler = async (req, res) => {
  // Extraemos el parámetro 'idPais' de los parámetros de la solicitud 
  const { idPais } = req.params;
  try {
    // Luego llamamos al controlador 'getCountryByIdController' para obtener el país correspondiente al ID proporcionado.
    const country = await getCountryByIdController(idPais);

    // Si no se encuentra un país con el ID proporcionado, se lanza un error.
    if (!country) throw new Error("Country not found 🙅‍♀️");

    // Si se encuentra un país con el ID proporcionado, se responde con el código de estado 200 y el país encontrado en formato JSON.
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCountryByIdHandler };
