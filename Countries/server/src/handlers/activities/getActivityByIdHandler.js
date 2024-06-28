const {
  getActivityByIdController,
} = require("../../controllers/activities/getActivityByIdController");

const getActivityByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const activity = await getActivityByIdController(id);

    if (!activity) throw new Error("Activity not found 🙅‍♀️");

    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getActivityByIdHandler };
