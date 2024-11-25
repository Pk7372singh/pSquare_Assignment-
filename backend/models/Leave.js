const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, required: true, enum: ['pending', 'approved', 'rejected'] },
  document: { type: String, required: false },
});

module.exports = mongoose.model('Leave', leaveSchema);
