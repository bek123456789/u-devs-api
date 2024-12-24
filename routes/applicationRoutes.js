const express = require('express');
const router = express.Router();
const Application = require('../models/applicationModel');

// Get all applications
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new application
router.post('/', async (req, res) => {
  const application = new Application(req.body);
  try {
    const newApplication = await application.save();
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an application
router.delete('/:id', async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application) return res.status(404).json({ message: 'Application not found' });
    res.json({ message: 'Application deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
