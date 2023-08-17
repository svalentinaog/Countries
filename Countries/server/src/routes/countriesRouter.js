const { Router } = require("express");
const { getCountriesHandler  } = require("../handlers/countries/getCountriesHandler");
const { getCountryByIdHandler } = require("../handlers/countries/getCountryByIdHandler");

const router = Router();

router.get("/", getCountriesHandler ); // Obtener todos los Paises.
router.get("/:idPais", getCountryByIdHandler); // Obtener el detalle de un País en específico por su Id.

// router.get("/", (req, res) => {
//   res.status(200).send("Estoy en Countries!");
// });
//
// router.get("/:id", (req, res) => {
//   res.status(200).send("Estoy en Country por Id!");
// });

module.exports = router;






// Rutas disponibles:
// (GET method) http://localhost:3001/countries -> Obtener todos los Paises
// (GET method) http://localhost:3001/countries/:idPais -> Obtener el detalle de un País específico
// (GET method) http://localhost:3001/countries?name=Country -> Obtener coincidencias.
