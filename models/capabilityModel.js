const mongoose = require('mongoose');

const capabilitySchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

module.exports = mongoose.model('Capability', capabilitySchema);
