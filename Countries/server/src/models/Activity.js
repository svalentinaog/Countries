const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Activity", {
    // Columna 'id' de tipo INTEGER, no permite valores nulos, es clave primaria y se autoincrementa
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    // Columna 'name' de tipo STRING, no permite valores nulos
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // Columna 'difficulty' de tipo INTEGER, no permite valores nulos
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },

    // Columna 'duration' de tipo INTEGER, no permite valores nulos
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 24,
      },
    },

    // Columna 'season' de tipo STRING, no permite valores nulos
    // "Verano", "Otoño", "Invierno", "Primavera"
    season: {
      type: DataTypes.ENUM("Summer", "Autumn", "Winter", "Spring"),
      allowNull: false,
    },
  });
};
