class HttpsError extends Error { // Clase HttpsError que extiende de la clase Error
    constructor(code, message) {
      super(message); // Llama al constructor de la clase padre (Error) con el mensaje proporcionado
      this.code = code; // Almacena el código de error proporcionado en una propiedad "code"
    }
  }
  
  module.exports = HttpsError; // Se exporta la clase HttpsError para poder ser utilizada en otros archivos
  