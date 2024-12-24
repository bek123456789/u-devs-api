const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  fullName: { type: String, required: true },
  telegram: { type: String, required: true },
  phone: { type: String, required: true },
  resume: { type: String, required: true },
});

module.exports = mongoose.model('Application', applicationSchema);
