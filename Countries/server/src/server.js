// módulo 'express', para crear y configurar una aplicación web en Node.js.
const express = require("express");

// módulo 'morgan', que es un middleware para registrar detalles de las solicitudes HTTP en la consola.
const morgan = require("morgan");

// módulo 'routes', que contiene las definiciones de las rutas de la aplicación.
const routes = require("./routes/index");

// middleware 'handlerErrors', que se utilizará para manejar errores en las rutas de la aplicación.
const { handlerErrors } = require("./middlewares/handlerErrors");

// módulo 'cors', que es un middleware para habilitar la política de mismo origen (CORS) en la aplicación.
const cors = require("cors");

// instancia de la aplicación Express.
const server = express();

// Nombre de la aplicación Express.
server.name = "API";

// middleware 'express.json()' para analizar el cuerpo de las solicitudes HTTP en formato JSON.
server.use(express.json());

// middleware 'morgan("dev")' para registrar los detalles de las solicitudes HTTP en la consola en modo desarrollo.
// El parámetro "dev" configura el formato de registro para mostrar información detallada de la solicitud, 
// como el método, la ruta, el código de estado, etc.
server.use(morgan("dev"));

// Agregamos el middleware 'cors()' para habilitar la política de mismo origen (CORS).
// Esto permitirá que el servidor responda a solicitudes desde diferentes dominios o puertos, lo que es útil para 
// permitir el acceso desde una aplicación web en otro dominio o puerto.
server.use(cors());

// Agregamos las rutas de la aplicación.
// El middleware 'routes' contiene las definiciones de las rutas y los controladores asociados a cada una de ellas.
server.use("/", routes);

// middleware 'handlerErrors' para manejar errores en las rutas de la aplicación.
// Este middleware capturará cualquier error que ocurra en las rutas y enviará una respuesta con el código de estado 
// adecuado y un mensaje de error en formato JSON.
server.use(handlerErrors);

// Exportamos la instancia de la aplicación para que pueda ser utilizada en otros archivos.
module.exports = server;  
