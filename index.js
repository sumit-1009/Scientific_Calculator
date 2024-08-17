// index.js
const express = require("express");
const cors = require("cors");
const Calculator = require("./calculator");
const { connectDB } = require("./db");

const app = express();
const calculator = new Calculator();

app.use(cors());
app.use(express.json()); // To handle JSON requests

// Connect to MySQL
(async () => {
  await connectDB();
})();

// Routes for frontend

// Perform a calculation
app.post("/calculate", async (req, res) => {
  const { operation, value1, value2 } = req.body;

  try {
    let result;
    switch (operation) {
      case "sin":
        result = await calculator.sin(value1);
        break;
      case "cos":
        result = await calculator.cos(value1);
        break;
      case "tan":
        result = await calculator.tan(value1);
        break;
      case "log":
        result = await calculator.log(value1);
        break;
      case "ln":
        result = await calculator.ln(value1);
        break;
      case "exp":
        result = await calculator.exp(value1);
        break;
      case "power":
        result = await calculator.power(value1, value2);
        break;
      case "mean":
        result = await calculator.mean(value1);
        break;
      case "median":
        result = await calculator.median(value1);
        break;
      case "standardDeviation":
        result = await calculator.standardDeviation(value1);
        break;
      default:
        return res.status(400).send("Invalid operation");
    }
    res.json({ result });
  } catch (error) {
    res.status(500).send("An error occurred while processing your request.");
  }
});

// Get calculation history
app.get("/history", async (req, res) => {
  try {
    const history = await calculator.getHistory();
    res.json(history);
  } catch (error) {
    res.status(500).send("An error occurred while retrieving the history.");
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
