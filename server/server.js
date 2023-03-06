const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Successfully conected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Up and running on port ${PORT}`);
});
const employeeRouter = require("./routes/employees.js");

app.use("/employee", employeeRouter);
