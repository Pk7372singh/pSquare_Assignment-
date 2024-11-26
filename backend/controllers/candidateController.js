const Candidate = require('../models/Candidate');
const Employee = require('../models/Employee'); 
const fs = require('fs');
const path = require('path');


exports.createCandidate = async (req, res) => {
  const { fullName, email, phone, department, experience, resume } = req.body;
  try {
    const candidate = await Candidate.create({ fullName, email, phone, department, experience, resume });
    res.status(201).json(candidate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.updateCandidate = async (req, res) => {
  const { id } = req.params;
  const { fullName, email, phone, department, experience, resume } = req.body;
  try {
    const candidate = await Candidate.findByIdAndUpdate(id, { fullName, email, phone, department, experience, resume }, { new: true });
    res.status(200).json(candidate);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.deleteCandidate = async (req, res) => {
  const { id } = req.params;
  try {
    await Candidate.findByIdAndDelete(id);
    res.status(200).json({ message: 'Candidate deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.downloadResume = async (req, res) => {
  const { id } = req.params;
  try {
    const candidate = await Candidate.findById(id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    const resumePath = path.join(__dirname, '../uploads', candidate.resume);
    res.download(resumePath);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.moveToEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const candidate = await Candidate.findById(id);
    if (!candidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    const employee = new Employee({
      fullName: candidate.fullName,
      email: candidate.email,
      phone: candidate.phone,
      department: candidate.department,
      experience: candidate.experience,
      resume: candidate.resume,
    });
    await employee.save();
    await Candidate.findByIdAndDelete(id);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.filterCandidates = async (req, res) => {
  const { fullName, department, email } = req.query;
  try {
    const query = {};

    if (fullName) {
      query.fullName = new RegExp(fullName, 'i');
    }

    if (department) {
      query.department = new RegExp(department, 'i');
    }

    if (email) {
      query.email = new RegExp(email, 'i');
    }

    const candidates = await Candidate.find(query);
    res.status(200).json(candidates);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
