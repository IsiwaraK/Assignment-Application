const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  empid: {
    type: "Number",
    required: true,
  },
  designation: {
    type: "string",
    required: true,
  },
  emptype: {
    type: "string",
    required: true,
  },
  experience: {
    type: "string",
    required: true,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
