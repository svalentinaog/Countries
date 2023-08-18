const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

// Controlador asincrónico para obtener países según un nombre parcial o completo.
const getCountriesController = async (name) => {
  // Creamos una cláusula WHERE para la consulta SQL basada en el parámetro 'name'.
  let whereClause = {
    name: {
      [Op.iLike]: `${name}%`, // Utilizamos el operador 'iLike' para una búsqueda insensible a mayúsculas/minúsculas.
    },
  };

  // Si no se proporciona un nombre, se buscan y retornan TODOS los países.
  if (!name) {
    return await Country.findAll({
      include: Activity, // Incluimos la asociación con el modelo 'Activity' para obtener las actividades asociadas.
    });
  }

  // Buscamos los países que coincidan con la cláusula WHERE y también incluimos las actividades asociadas.
  const countries = await Country.findAll({
    where: whereClause,
    include: Activity,
  });

  // Si no se encuentran países que coincidan con el criterio de búsqueda, lanzamos un error.
  if (countries.length === 0) {
    throw new Error("Country not found 🙅‍♀️");
  }

  return countries;
};

module.exports = { getCountriesController };
