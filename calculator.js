// calculator.js
const math = require("mathjs");
const Calculation = require("./models/Calculation");

class Calculator {
  // Trigonometric functions
  async sin(value) {
    return await this.saveAndReturn(
      `sin(${value})`,
      math.sin(math.unit(value, "deg"))
    );
  }

  async cos(value) {
    return await this.saveAndReturn(
      `cos(${value})`,
      math.cos(math.unit(value, "deg"))
    );
  }

  async tan(value) {
    return await this.saveAndReturn(
      `tan(${value})`,
      math.tan(math.unit(value, "deg"))
    );
  }

  // Logarithmic functions
  async log(value) {
    return await this.saveAndReturn(`log(${value})`, math.log10(value));
  }

  async ln(value) {
    return await this.saveAndReturn(`ln(${value})`, math.log(value));
  }

  // Exponential functions
  async exp(value) {
    return await this.saveAndReturn(`exp(${value})`, math.exp(value));
  }

  async power(base, exponent) {
    return await this.saveAndReturn(
      `power(${base}, ${exponent})`,
      math.pow(base, exponent)
    );
  }

  // Statistical functions
  async mean(data) {
    return await this.saveAndReturn(`mean(${data})`, math.mean(data));
  }

  async median(data) {
    return await this.saveAndReturn(`median(${data})`, math.median(data));
  }

  async standardDeviation(data) {
    return await this.saveAndReturn(
      `standardDeviation(${data})`,
      math.std(data)
    );
  }

  // Save the calculation and return the result
  async saveAndReturn(expression, result) {
    await Calculation.create({ expression, result: result.toString() });
    return result;
  }

  // Retrieve the last 50 calculations
  async getHistory() {
    return await Calculation.findAll({
      limit: 50,
      order: [["timestamp", "DESC"]],
    });
  }
}

module.exports = Calculator;
