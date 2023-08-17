const { Router } = require("express");

// Importación de los módulos de rutas
const countriesRouter = require("./countriesRouter");
const activitiesRouter = require("./activitiesRouter");

const router = Router(); // Instancia de enrutador de Express

// Configuración de rutas y sus correspondientes módulos de enrutamiento

router.use("/countries", countriesRouter);// Usar el módulo de rutas 'countries' para las rutas que comiencen con '/countries'. Cualquier peticion que vaya a "/" (barra) countries, que vaya a countriesRouter.
router.use("/activities", activitiesRouter);// Usar el módulo de rutas 'activities' para las rutas que comiencen con '/activities'


module.exports = router; // Exportación del enrutador configurado para su uso en otros archivos

