const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = mongoose.model('Client', clientSchema);