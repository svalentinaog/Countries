require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

// ☘️ Configuración de la conexión a la base de datos utilizando Sequelize
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/countries`,
  {
    logging: false, // Configuración para desactivar los logs de las consultas SQL
    native: false, // Configuración para desactivar el uso de pg-native
  }
);

const basename = path.basename(__filename);
const modelDefiners = [];

// Lectura de los archivos de modelos en la carpeta "models" y su carga en el arreglo "modelDefiners"
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Inyección de la conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalización de los nombres de los modelos (ie: product => Product)
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// Obtenemos los modelos importados como propiedades desde sequelize.models
const { Country, Activity } = sequelize.models;

// Definición de las relaciones entre los modelos
Country.belongsToMany(Activity, { through: "CountryActivity" });
Activity.belongsToMany(Country, { through: "CountryActivity" });

module.exports = {
  ...sequelize.models, // Exportamos los modelos para poder importarlos individualmente importar así: const { Product, User } = require('./db.js');
  conn: sequelize, // Exportamos la conexión a la base de datos para importarla según sea necesario, importar  así: { conn } = require('./db.js');
};
