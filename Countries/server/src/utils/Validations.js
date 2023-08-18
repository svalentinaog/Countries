const HttpsError = require("./HttpsError.js");

class Validator {
  // Métodos estáticos para validar datos

  static isString(string, name, maxLength) {
    this.isDefined(string, name);
    // El valor proporcionado no es una cadena.
    if (typeof string !== "string") {
      throw new HttpsError(400, `😡 The ${name} value is not a string.`);
    }
    // El valor proporcionado es una cadena vacía.
    if (string.length === 0) {
      throw new HttpsError(
        400,
        `😠 The value of ${name} must not be an empty string.`
      );
    }
    const length = string.length;

    // El valor proporcionado excede la longitud máxima permitida.
    if (length > maxLength) {
      throw new HttpsError(
        400,
        `🙅‍♀️ The ${name} exceeds the maximum allowed length of ${maxLength} characters.`
      );
    }
    if (!length) {
      throw new HttpsError(
        400,
        `🤯 The data ${name} was not provided which is unacceptable`
      );
    }
    return string;
  }

  static isNumber(number, name, maximum) {
    this.isDefined(number, name);
    number = Number(number);
    // El valor proporcionado no es un número.
    if (
      isNaN(number) ||
      !Number.isInteger(number) ||
      typeof number !== "number"
    ) {
      throw new HttpsError(400, `❗The ${name} value is not a number#️⃣.`);
    }
    // El valor proporcionado excede la longitud máxima permitida.
    if (number > maximum) {
      throw new HttpsError(
        400,
        `🙅The ${name} exceeds the maximum allowed value of ${maximum}.`
      );
    }
    return number;
  }

  static isArray(array, name) {
    this.isDefined(array, name);

    // El valor proporcionado no es una matriz.
    if (!Array.isArray(array)) {
      throw new HttpsError(400, `❗The ${name} value is not an array.`);
    }

    return array;
  }

  static isDefined(value, name) {
    // El valor proporcionado no está definido.
    if (typeof value === "undefined") {
      throw new HttpsError(400, `❌ The data "${name}" is not defined.`);
    }
    return value;
  }
}

module.exports = Validator;

/*
  🐝 La clase Validator proporciona una manera consistente y reutilizable de validar diferentes tipos de datos
  antes de su procesamiento. Esto puede ayudar a mejorar la robustez y la seguridad de una aplicación al garantizar que 
  los datos recibidos cumplan con ciertos estándares y criterios definidos. El uso de una clase de validación como 
  esta puede simplificar el código y mejorar la legibilidad, ya que centraliza la lógica de validación en un solo lugar.
*/

/*
  🤯"static" se usa para definir miembros (métodos o propiedades) que pertenecen a una clase en lugar de a una instancia 
  particular de esa clase. Esto significa que los miembros estáticos no están vinculados a objetos individuales creados a 
  partir de la clase, sino que están asociados directamente con la propia clase. 
*/