// models/Calculation.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../db");

// Define the Calculation model
const Calculation = sequelize.define("Calculation", {
  expression: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  result: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

// Sync the model with the database
(async () => {
  await Calculation.sync();
})();

module.exports = Calculation;
