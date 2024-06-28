const { Country } = require("../db.js");

const axios = require("axios");

const fetchApi = async () => {
  try {
    const response = await axios.get("http://localhost:5000/countries");
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

    return data;
  } catch (error) {
    console.log(error, "Se ha producido un error al extraer datos de la API local 🤯");
  }
};

const fetchDB = async () => {
  try {
    const db = await Country.findAll();
    const countries = await fetchApi();
    await Country.bulkCreate(countries);
    console.log("Base de datos cargada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchDB;
