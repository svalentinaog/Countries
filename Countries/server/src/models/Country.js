const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Country", {
    // Columna 'id' de tipo STRING, no permite valores nulos, es clave primaria 
    // (Código de tres letras)
    id: {
      type: DataTypes.STRING(3),
      // defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },

    // Columna 'name' de tipo STRING, no permite valores nulos
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    // Columna 'image' de tipo STRING, no permite valores nulos
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Columna 'continent' (region) de tipo STRING, no permite valores nulos
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Columna 'capital' de tipo STRING, no permite valores nulos
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Columna 'subregion' de tipo STRING, no permite valores nulos
    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Columna 'area' de tipo STRING, no permite valores nulos
    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Columna 'population' de tipo STRING, no permite valores nulos
    population: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
  });
};
