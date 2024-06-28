const HttpsError = require("./HttpsError.js");

class Validator {
  // Métodos estáticos para validar datos

  static isString(string, name, maxLength) {
    this.isDefined(string, name);
    if (typeof string !== "string") {
      throw new HttpsError(400, `😡 The ${name} value is not a string.`);
    }
    if (string.length === 0) {
      throw new HttpsError(
        400,
        `😠 The value of ${name} must not be an empty string.`
      );
    }
    const length = string.length;

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
    if (
      isNaN(number) ||
      !Number.isInteger(number) ||
      typeof number !== "number"
    ) {
      throw new HttpsError(400, `❗The ${name} value is not a number#️⃣.`);
    }
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

    if (!Array.isArray(array)) {
      throw new HttpsError(400, `❗The ${name} value is not an array.`);
    }

    return array;
  }

  static isDefined(value, name) {
    if (typeof value === "undefined") {
      throw new HttpsError(400, `❌ The data "${name}" is not defined.`);
    }
    return value;
  }
}

module.exports = Validator;