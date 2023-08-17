// Importamos los modelos 'Country' y 'Activity' desde el archivo 'db.js' ubicado en el mismo nivel de la carpeta actual (presumiblemente representan las tablas de países y actividades en la base de datos).
const { Activity, Country } = require("../../db");

// Definimos un controlador asincrónico para obtener todas las actividades turísticas
const getActivitiesController = async () => {
  // Se utiliza la función 'findAll' proporcionada por el modelo 'Activity' para buscar todas las actividades en la base de datos
  // El método 'findAll' permite buscar registros que cumplan ciertas condiciones, pero en este caso, no se proporcionan condiciones, por lo que se obtendrán todas las actividades.
  // La función 'findAll' también puede incluir relaciones con otros modelos utilizando la opción 'include'
  // En este caso, se incluye el modelo 'Country' con solo el atributo 'id' para cada actividad encontrada.
  return await Activity.findAll({
    include: [
      {
        model: Country,
        attributes: ["id"],
      },
    ],
  });
};

// Exportamos el controlador para que pueda ser utilizado en otro lugar, por ejemplo, en el manejador de la ruta que obtiene actividades.
module.exports = { getActivitiesController };
