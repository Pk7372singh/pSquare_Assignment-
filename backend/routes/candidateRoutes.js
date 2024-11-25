const express = require('express');
const {
  createCandidate,
  getAllCandidates,
  updateCandidate,
  deleteCandidate,
  downloadResume,
  moveToEmployee,
  filterCandidates,
} = require('../controllers/candidateController');
const router = express.Router();

router.post('/', createCandidate);
router.get('/', getAllCandidates);
router.put('/:id', updateCandidate);
router.delete('/:id', deleteCandidate);
router.get('/download/:id', downloadResume);
router.post('/move-to-employee/:id', moveToEmployee);
router.get('/filter', filterCandidates);

module.exports = router;
