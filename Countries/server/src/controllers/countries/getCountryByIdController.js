const { Country, Activity } = require("../../db");

// Controlador asincrónico para obtener un país por su ID.
const getCountryByIdController = async (id) => {
  return await Country.findByPk(id, {
    include: Activity,
  });
};

module.exports = { getCountryByIdController };

// Utilizamos el modelo 'Country' para buscar un país en la base de datos según su ID proporcionado (parámetro 'id').
// La función 'findByPk' de Sequelize permite buscar un registro por su clave primaria (Primary Key).
// En este caso, buscamos un país en la tabla 'countries' cuyo ID coincida con el valor proporcionado en el parámetro 'id'.
// La opción 'include' permite incluir la asociación con el modelo 'Activity', para obtener también las actividades 
// asociadas al país encontrado.
