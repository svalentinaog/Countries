const { Country, Activity } = require("../../db");

const getCountryByIdController = async (id) => {
  return await Country.findByPk(id, {
    include: Activity,
  });
};

module.exports = { getCountryByIdController };

