

const express = require('express');
const Employee = require('../models/Employee');
const { protect } = require('../controllers/authController'); 

const router = express.Router();


router.post('/', protect, async (req, res) => {
  const { fullName, email, phone, department, position, dateOfJoining } = req.body;

  try {
    
    const employee = await Employee.create({
      fullName,
      email,
      phone,
      department,
      position, 
      dateOfJoining,
    });

    res.status(201).json(employee); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
