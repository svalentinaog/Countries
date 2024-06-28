const { Router } = require("express");
const { getCountriesHandler  } = require("../handlers/countries/getCountriesHandler");
const { getCountryByIdHandler } = require("../handlers/countries/getCountryByIdHandler");

const router = Router();

router.get("/", getCountriesHandler ); 
router.get("/:idPais", getCountryByIdHandler);

module.exports = router;