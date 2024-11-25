const Employee = require('../models/Employee');


exports.createEmployee = async (req, res) => {
  const { fullName, email, phone, department, role, experience } = req.body;
  try {
    const employee = await Employee.create({ fullName, email, phone, department, role, experience });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, phone, department, role, experience } = req.body;
  try {
    const employee = await Employee.findByIdAndUpdate(id, { fullName, email, phone, department, role, experience }, { new: true });
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    await Employee.findByIdAndDelete(id);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.filterEmployees = async (req, res) => {
  const { name, department, role } = req.query;
  try {
    const query = {};

    if (name) {
      query.fullName = new RegExp(name, 'i');
    }

    if (department) {
      query.department = new RegExp(department, 'i');
    }

    if (role) {
      query.role = new RegExp(role, 'i');
    }

    const employees = await Employee.find(query);
    res.status(200).json(employees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
