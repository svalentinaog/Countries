const { Router } = require("express");
const { getActivitiesHandler } = require("../handlers/activities/getActivitiesHandler");
const { postActivityHandler } = require("../handlers/activities/postActivityHandler");
const { putActivityHandler } = require("../handlers/activities/putActivityHandler");
const { deleteActivityHandler } = require("../handlers/activities/deleteActivityHandler");
const { getActivityByIdHandler } = require("../handlers/activities/getActivityByIdHandler");

const router = Router();

router.get("/", getActivitiesHandler); 
router.get("/:id", getActivityByIdHandler); 
router.post("/", postActivityHandler); 
router.put("/:id", putActivityHandler); 
router.delete("/:id", deleteActivityHandler); 

module.exports = router;
