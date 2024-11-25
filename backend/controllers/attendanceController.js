const Attendance = require('../models/Attendance');
const Employee = require('../models/Employee'); 


exports.createOrUpdateAttendance = async (req, res) => {
  const { employeeId, date, status, task } = req.body;
  try {
    let attendance = await Attendance.findOne({ employeeId, date });
    if (attendance) {
      attendance.status = status;
      attendance.task = task;
    } else {
      attendance = new Attendance({ employeeId, date, status, task });
    }
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.filterAttendance = async (req, res) => {
  const { name, department, role, date } = req.query;
  try {
    const query = {};

    if (name) {
      const employees = await Employee.find({ name: new RegExp(name, 'i') });
      const employeeIds = employees.map(emp => emp._id);
      query.employeeId = { $in: employeeIds };
    }

    if (department) {
      const employees = await Employee.find({ department: new RegExp(department, 'i') });
      const employeeIds = employees.map(emp => emp._id);
      query.employeeId = { $in: employeeIds };
    }

    if (role) {
      const employees = await Employee.find({ role: new RegExp(role, 'i') });
      const employeeIds = employees.map(emp => emp._id);
      query.employeeId = { $in: employeeIds };
    }

    if (date) {
      query.date = date;
    }

    const attendanceRecords = await Attendance.find(query).populate('employeeId');
    res.status(200).json(attendanceRecords);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
