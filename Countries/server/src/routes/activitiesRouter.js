const { Router } = require("express");
const { getActivitiesHandler } = require("../handlers/activities/getActivitiesHandler");
const { postActivityHandler } = require("../handlers/activities/postActivityHandler");
const { putActivityHandler } = require("../handlers/activities/putActivityHandler");
const { deleteActivityHandler } = require("../handlers/activities/deleteActivityHandler");
const { getActivityByIdHandler } = require("../handlers/activities/getActivityByIdHandler");

const router = Router();

router.get("/", getActivitiesHandler); // Obtener todas las actividades turísticas.
router.get("/:id", getActivityByIdHandler); // Obtener la actividad especificada.
router.post("/", postActivityHandler); // Crear una nueva actividad turística.
router.put("/:id", putActivityHandler); // Actualizar la actividad especificada.
router.delete("/:id", deleteActivityHandler); // Eliminar actividad

// router.get("/", (req, res) => {
//   res.status(200).send("Estoy en Activities!");
// });

// router.post("/", (req, res) => {
//   res.status(200).send("Estoy creando una Actividad Turistica!");
// });

module.exports = router;




// Rutas disponibles:
// (POST method) http://localhost:3001/activities -> Crear una nueva actividad turística.
// (GET method) http://localhost:3001/activities -> Obtener todas las actividades turísticas.
// (PUT method) http://localhost:3001/activities/:idPais -> Obtener todas las actividades turísticas.
