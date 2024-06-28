const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Country", {
    id: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    subregion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    area: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    population: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
  });
};
