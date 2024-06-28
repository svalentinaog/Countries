const {
  getActivitiesController,
} = require("../../controllers/activities/getActivitiesController");

const getActivitiesHandler = async (req, res) => {
  try {
    const activities = await getActivitiesController(); 
    res.status(200).json(activities); 
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
};

module.exports = { getActivitiesHandler };
