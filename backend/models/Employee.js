const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  resume: {
    type: String, 
    required: true,
  },
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
