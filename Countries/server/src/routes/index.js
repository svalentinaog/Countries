const { Router } = require("express");

// Importación de los módulos de rutas
const countriesRouter = require("./countriesRouter");
const activitiesRouter = require("./activitiesRouter");

const router = Router(); // Instancia de enrutador de Express

// Configuración de rutas y sus correspondientes módulos de enrutamiento
router.use("/countries", countriesRouter);// módulo de rutas 'countries' para las rutas que comiencen con '/countries'.
router.use("/activities", activitiesRouter);// módulo de rutas 'activities' para las rutas que comiencen con '/activities'


module.exports = router; 

