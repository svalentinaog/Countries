const {
  deleteActivityController,
} = require("../../controllers/activities/deleteActivityController");

const deleteActivityHandler = async (req, res) => {
  const { id } = req.params; 


  try {
    const deletedActivity = await deleteActivityController(id);
    res.status(200).json(deletedActivity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { deleteActivityHandler };
