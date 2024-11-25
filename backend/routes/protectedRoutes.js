const express = require('express');
const { protect } = require('../controllers/authController');
const { getAllEmployees, createEmployee, updateEmployee, deleteEmployee, filterEmployees } = require('../controllers/employeeController');
const router = express.Router();

router.use(protect);

router.post('/employees', createEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);
router.get('/employees', getAllEmployees);
router.get('/employees/filter', filterEmployees);

module.exports = router;
