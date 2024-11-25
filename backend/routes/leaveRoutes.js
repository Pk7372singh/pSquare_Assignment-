const express = require('express');
const {
  createLeave,
  updateLeaveStatus,
  getApprovedLeaves,
  getTodayApprovedLeaves,
  downloadDocument,
  filterLeaves,
} = require('../controllers/leaveController');
const router = express.Router();

router.post('/', createLeave);
router.put('/:id', updateLeaveStatus);
router.get('/approved', getApprovedLeaves);
router.get('/approved/today', getTodayApprovedLeaves);
router.get('/download/:id', downloadDocument);
router.get('/filter', filterLeaves);

module.exports = router;
