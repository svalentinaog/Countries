const { Country, Activity } = require("../../db"); // Importamos los modelos 'Country' y 'Activity' desde el archivo 'db.js' ubicado en el mismo nivel de la carpeta actual (presumiblemente representan las tablas de países y actividades en la base de datos).
const { Op } = require("sequelize"); // Importamos el operador 'Op' desde Sequelize, que nos permite utilizar operadores especiales en las consultas de la base de datos.

const getCountriesController = async (name, sort, continent, activity) => {
  let ordering = [];

  let whereClause = {
    name: {
      [Op.iLike]: `${name}%`,
    },
  };
  // Si no se consulta un nombre, se devuelven todos los paises
  if (!name) {
    return await Country.findAll({
      include: Activity,
    });
  }
  // Si se establece un tipo de ordenaiento, se devuelven los paises con ese orden
  if (sort === "ASC") {
    ordering.push(["name", "ASC"]);
  } else if (sort === "DESC") {
    ordering.push(["name", "DESC"]);
  }
  // Si se proporciona el nombre de un continente en particular, se trae solo los paises que pertenecen a dicho continente
  if (continent) {
    whereClause.continent = continent;
  }
  // Si se menciona una actividad en especifico, se traen los paises asociados a dicha actividad
  if (activity) {
    whereClause["$Activities.name$"] = {
      [Op.iLike]: `%${activity}%`,
    };
  }
  const countries = await Country.findAll({
    where: whereClause,
    include: Activity,
    order: ordering,
  });
  if (countries.length === 0) {
    throw new Error("Country not found 🙅‍♀️");
  }
  return countries;
};

// Exportamos el controlador para que pueda ser utilizado en otro lugar, por ejemplo, en el manejador de una ruta que obtiene países según un criterio de búsqueda.
module.exports = { getCountriesController };
