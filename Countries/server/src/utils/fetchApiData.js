// Importamos el modelo 'Country' desde el archivo 'db.js' ubicado en la carpeta 'src'.
const { Country } = require("../db.js");

// Importamos la librería 'axios' para realizar solicitudes HTTP a una API externa.
const axios = require("axios");

// Definimos una función asincrónica llamada 'fetchApi' para obtener datos de una API externa.
const fetchApi = async () => {
  try {
    // Realizamos una solicitud HTTP GET a la URL "http://localhost:5000/countries" utilizando 'axios'.
    const response = await axios.get("http://localhost:5000/countries");

    // Extraemos los datos de la respuesta obtenida y los mapeamos para obtener solo los campos que nos interesan.
    const data = await response.data.map((Country) => {
      return {
        id: Country.cca3, // Se asigna el valor de la propiedad 'cca3' de cada país como el ID.
        name: Country.name.common, // Se asigna el valor de la propiedad 'name.common' de cada país como el nombre.
        image: Country.flags.png, // Se asigna el valor de la propiedad 'flags.png' de cada país como la imagen.
        continent: Country.continents ? Country.continents[0] : "undefined", // Se asigna el valor del primer continente (si existe) de cada país como el continente.
        capital: Country.capital ? Country.capital.join(", ") : "undefined", // Se asigna una cadena con la lista de capitales (si existen) de cada país como la capital.
        subregion: Country.subregion ? Country.subregion : "undefined", // Se asigna el valor de la propiedad 'subregion' de cada país como la subregión.
        area: Country.area ? Country.area : "undefined", // Se asigna el valor de la propiedad 'area' de cada país como el área.
        population: Country.population ? Country.population : "undefined", // Se asigna el valor de la propiedad 'population' de cada país como la población.
      };
    });

    // Retornamos los datos mapeados.
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Definimos una función asincrónica llamada 'fetchDB' para obtener datos de la API externa y cargarlos en la base de datos local.
const fetchDB = async () => {
  try {
    // Realizamos una consulta a la base de datos para obtener todos los países existentes.
    const db = await Country.findAll();

    // Obtenemos los datos de la API externa utilizando la función 'fetchApi'.
    const countries = await fetchApi();

    // Insertamos los países obtenidos de la API externa en la base de datos utilizando 'bulkCreate'.
    await Country.bulkCreate(countries);

    // Mostramos un mensaje en la consola indicando que la base de datos ha sido cargada.
    console.log("Base de datos cargada");
  } catch (error) {
    console.log(error);
  }
};

// Exportamos la función 'fetchDB' para que pueda ser utilizada en otros archivos.
module.exports = fetchDB;
