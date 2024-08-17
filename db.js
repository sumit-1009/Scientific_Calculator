// db.js
const { Sequelize } = require("sequelize");

// Create a connection to MySQL
const sequelize = new Sequelize(
  "sci_calculator_db",
  "root",
  "Sumit@1009",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to MySQL has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sequelize, connectDB };
