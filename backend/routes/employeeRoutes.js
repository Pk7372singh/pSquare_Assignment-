const express = require('express');
const multer = require('multer');
const Employee = require('../models/Employee');
const { protect } = require('../controllers/authController'); 

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post('/', protect, upload.single('resume'), async (req, res) => {
  const { fullName, email, phone, department, role, experience } = req.body;


  if (!req.file) {
    return res.status(400).json({ error: 'Resume file is required' });
  }

  try {
    
    const employee = await Employee.create({
      fullName,
      email,
      phone,
      department,
      role,
      experience,
      resume: req.file.path,
    });

    res.status(201).json(employee); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
