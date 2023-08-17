// Importamos el controlador 'getCountriesController' desde el archivo de controladores que maneja la obtención de países.
const {
  getCountriesController,
} = require("../../controllers/countries/getCountriesController");

// Definimos el manejador de la ruta para obtener países.
const getCountriesHandler = async (req, res) => {
  const { name, sort, continent, activity } = req.query;

  try {
    // Llamamos al controlador 'getCountriesController' para obtener los países según el criterio de búsqueda proporcionado en 'name'.
    const country = await getCountriesController(name, sort, continent, activity);
    // Si la obtención de los países es exitosa, enviamos una respuesta con código de estado 200 y los países encontrados en formato JSON.
    res.status(200).json(country);
  } catch (error) {
    // Si ocurre algún error durante la obtención de los países (por ejemplo, si no se encuentran países que coincidan con el criterio de búsqueda o hay un error en la base de datos), enviamos una respuesta con código de estado 400 y el mensaje de error en formato JSON.
    res.status(400).json({ error: error.message });
  }
};

// Exportamos el manejador para que pueda ser utilizado en otro lugar, por ejemplo, en la definición de rutas de la aplicación Express para manejar las solicitudes HTTP de obtención de países.
module.exports = { getCountriesHandler };
