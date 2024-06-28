const { Country, Activity } = require("../../db");

const getActivityByIdController = async (id) => {
  return await Activity.findByPk(id, {
    include: Country,
  });
};

module.exports = { getActivityByIdController };