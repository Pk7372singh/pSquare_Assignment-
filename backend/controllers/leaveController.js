const Leave = require('../models/Leave');
const Employee = require('../models/Employee'); 


exports.createLeave = async (req, res) => {
  const { employeeId, startDate, endDate, status, document } = req.body;
  try {
    const leave = await Leave.create({ employeeId, startDate, endDate, status, document });
    res.status(201).json(leave);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.updateLeaveStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const leave = await Leave.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(leave);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getApprovedLeaves = async (req, res) => {
  try {
    const approvedLeaves = await Leave.find({ status: 'approved' }).populate('employeeId');
    res.status(200).json(approvedLeaves);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getTodayApprovedLeaves = async (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  try {
    const todayApprovedLeaves = await Leave.find({
      status: 'approved',
      startDate: { $lte: today },
      endDate: { $gte: today },
    }).populate('employeeId');
    res.status(200).json(todayApprovedLeaves);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.downloadDocument = async (req, res) => {
  const { id } = req.params;
  try {
    const leave = await Leave.findById(id);
    if (!leave || !leave.document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    const documentPath = path.join(__dirname, '../uploads', leave.document);
    res.download(documentPath);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.filterLeaves = async (req, res) => {
  const { name, status } = req.query;
  try {
    const query = {};

    if (status) {
      query.status = new RegExp(status, 'i');
    }

    if (name) {
      const employees = await Employee.find({ fullName: new RegExp(name, 'i') });
      const employeeIds = employees.map(emp => emp._id);
      query.employeeId = { $in: employeeIds };
    }

    const leaves = await Leave.find(query).populate('employeeId');
    res.status(200).json(leaves);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
