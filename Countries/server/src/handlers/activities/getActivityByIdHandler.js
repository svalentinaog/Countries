// Importamos el controlador 'getActivityByIdController' desde el archivo de controladores que maneja la obtención de un país por su ID.
const { getActivityByIdController } = require("../../controllers/activities/getActivityByIdController");

// Definimos el manejador de la ruta para obtener un país por su ID.
const getActivityByIdHandler = async (req, res) => {
  // Extraemos el parámetro 'id' de los parámetros de la solicitud HTTP (req.params) para utilizarlo como ID del país a buscar en el controlador.
  const { id } = req.params;
  try {
    // Llamamos al controlador 'getActivityByIdController' para obtener el país correspondiente al ID proporcionado.
    const Activity = await getActivityByIdController(id);

    // Si no se encuentra un país con el ID proporcionado, se lanza un error.
    if (!Activity) throw new Error("Activity not found 🙅‍♀️");

    // Si se encuentra un país con el ID proporcionado, se responde con el código de estado 200 y el país encontrado en formato JSON.
    res.status(200).json(Activity);
  } catch (error) {
    // Si ocurre algún error durante la obtención del país (por ejemplo, si no se encuentra el país con el ID proporcionado o hay un error en la base de datos), se responde con el código de estado 400 y el mensaje de error en formato JSON.
    res.status(400).json({ error: error.message });
  }
};

// Exportamos el manejador para que pueda ser utilizado en otro lugar, por ejemplo, en la definición de rutas de la aplicación Express para manejar las solicitudes HTTP de obtención de un país por su ID.
module.exports = { getActivityByIdHandler };
