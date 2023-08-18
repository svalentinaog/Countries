const { Activity, Country } = require("../../db");

// Controlador asincrónico para obtener todas las actividades turísticas
const getActivitiesController = async () => {
  return await Activity.findAll({
    include: [
      {
        model: Country,
        attributes: ["id"],
      },
    ],
  });
};

module.exports = { getActivitiesController };

// Se utiliza la función 'findAll' proporcionada por el modelo 'Activity' para buscar todas las actividades en la base de datos
// El método 'findAll' permite buscar registros que cumplan ciertas condiciones, pero en este caso, no se proporcionan condiciones, 
// por lo que se obtendrán todas las actividades.
// La función 'findAll' también puede incluir relaciones con otros modelos utilizando la opción 'include'
// En este caso, se incluye el modelo 'Country' con solo el atributo 'id' para cada actividad encontrada.
