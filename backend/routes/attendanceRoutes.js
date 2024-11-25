const express = require('express');
const {
  createOrUpdateAttendance,
  filterAttendance
} = require('../controllers/attendanceController');
const router = express.Router();

router.post('/', createOrUpdateAttendance);
router.get('/filter', filterAttendance);

module.exports = router;
