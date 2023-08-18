const { Country, Activity } = require("../../db");

// Definimos un controlador asincrónico para obtener un país por su ID.
const getActivityByIdController = async (id) => {
  return await Activity.findByPk(id, {
    include: Country,
  });
};

module.exports = { getActivityByIdController };

// Utilizamos el modelo 'Activity' para buscar un país en la base de datos según su ID proporcionado (parámetro 'id').
// La función 'findByPk' de Sequelize permite buscar un registro por su clave primaria (Primary Key).
// En este caso, buscamos un país en la tabla 'countries' cuyo ID coincida con el valor proporcionado en el parámetro 'id'.
// La opción 'include' permite incluir la asociación con el modelo 'Country', para obtener también las actividades 
// asociadas al país encontrado.
