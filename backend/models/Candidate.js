const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  department: { type: String, required: true },
  experience: { type: Number, required: true },
  resume: { type: String, required: true }, 
});

module.exports = mongoose.model('Candidate', candidateSchema);
