// Middleware para manejar errores en caso de que no se encuentre una ruta
const handlerErrors = (err, req, res, next) => {
  const status = err.status || 500; // Se obtiene el código de estado del error (por defecto 500 si no se especifica)
  const message = err.message || err; // Se obtiene el mensaje del error o el propio error si no contiene un mensaje
  console.error(err); // Se imprime el error en la consola
  res.status(status).send(message); // Se envía una respuesta con el código de estado y el mensaje del error
  next();
};

module.exports = { handlerErrors };
