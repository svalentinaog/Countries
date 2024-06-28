const { Country, Activity } = require("../../db");
const { Op } = require("sequelize");

const getCountriesController = async (name) => {
  let whereClause = {
    name: {
      [Op.iLike]: `${name}%`,
    },
  };

  if (!name) {
    return await Country.findAll({
      include: Activity,
    });
  }

  const countries = await Country.findAll({
    where: whereClause,
    include: Activity,
  });

  if (countries.length === 0) {
    throw new Error("Country not found 🙅‍♀️");
  }

  return countries;
};

module.exports = { getCountriesController };
