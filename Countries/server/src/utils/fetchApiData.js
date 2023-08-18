const { Country } = require("../db.js");

const axios = require("axios");

// función asincrónica 'fetchApi' para obtener datos de una API externa.
const fetchApi = async () => {
  try {
    // Se hace la solicitud HTTP GET a la URL utilizando 'axios'.
    const response = await axios.get("http://localhost:5000/countries");

    // Extraemos los datos de la respuesta obtenida y los mapeamos para obtener solo los campos que nos interesan.
    const data = await response.data.map((Country) => {
      return {
        id: Country.cca3,
        name: Country.name.common,
        image: Country.flags.png,
        continent: Country.continents ? Country.continents[0] : "undefined",
        capital: Country.capital ? Country.capital.join(", ") : "undefined",
        subregion: Country.subregion ? Country.subregion : "undefined",
        area: Country.area ? Country.area : "undefined",
        population: Country.population ? Country.population : "undefined",
      };
    });

    // Retornamos los datos mapeados.
    return data;
  } catch (error) {
    console.log(error, "Se ha producido un error al extraer datos de la API local 🤯");
  }
};

// 'fetchDB' para obtener datos de la API externa que se extrayeron en fetchApi y cargarlos en la base de datos local.
const fetchDB = async () => {
  try {
    // Consulta a la base de datos para obtener todos los países existentes.
    const db = await Country.findAll();

    // Obtenemos los datos de la API externa utilizando la función 'fetchApi'.
    const countries = await fetchApi();

    // Insertamos los países obtenidos de la API externa en la base de datos utilizando 'bulkCreate'.
    await Country.bulkCreate(countries);

    console.log("Base de datos cargada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchDB;
