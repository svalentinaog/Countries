const { Activity, Country } = require("../../db");

const getActivitiesController = async () => {
  return await Activity.findAll({
    include: [
      {
        model: Country,
        attributes: ["id"],
      },
    ],
  });
};

module.exports = { getActivitiesController };