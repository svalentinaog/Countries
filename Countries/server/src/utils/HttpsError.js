class HttpsError extends Error {
  constructor(code, message) {
    super(message); // Llama al constructor de la clase padre (Error) con el mensaje proporcionado
    this.code = code; // Almacena el código de error proporcionado en una propiedad "code"
  }
}

module.exports = HttpsError; 

/*
  🐝 La clase HttpsError que se extiende de la clase Error heredará todas las propiedades y métodos de está, 
  y también puede tener propiedades y métodos adicionales específicos. HttpsError se utiliza para crear objetos 
  que representan errores personalizados en mi aplicación. Estos errores pueden incluir un código de error 
  específico y un mensaje descriptivo.
  */
