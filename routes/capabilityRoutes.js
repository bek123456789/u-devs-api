const express = require('express');
const router = express.Router();
const Capability = require('../models/capabilityModel');

// Get all capabilities
router.get('/', async (req, res) => {
  try {
    const capabilities = await Capability.find();
    res.json(capabilities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new capability
router.post('/', async (req, res) => {
  const capability = new Capability(req.body);
  try {
    const newCapability = await capability.save();
    res.status(201).json(newCapability);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a capability
router.delete('/:id', async (req, res) => {
  try {
    const capability = await Capability.findByIdAndDelete(req.params.id);
    if (!capability) return res.status(404).json({ message: 'Capability not found' });
    res.json({ message: 'Capability deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
