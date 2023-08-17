// Importamos los modelos 'Country' y 'Activity' desde el archivo 'db.js' ubicado en el mismo nivel de la carpeta actual (presumiblemente representan las tablas de países y actividades en la base de datos).
const { Country, Activity } = require("../../db");

// Definimos un controlador asincrónico para obtener un país por su ID.
const getCountryByIdController = async (id) => {
  // Utilizamos el modelo 'Country' para buscar un país en la base de datos según su ID proporcionado (parámetro 'id').
  // La función 'findByPk' de Sequelize permite buscar un registro por su clave primaria (Primary Key).
  // En este caso, buscamos un país en la tabla 'countries' cuyo ID coincida con el valor proporcionado en el parámetro 'id'.
  // La opción 'include' permite incluir la asociación con el modelo 'Activity', para obtener también las actividades asociadas al país encontrado.
  return await Country.findByPk(id, {
    include: Activity,
  });
};

// Exportamos el controlador para que pueda ser utilizado en otro lugar, por ejemplo, en el manejador de una ruta que obtiene un país por su ID.
module.exports = { getCountryByIdController };
