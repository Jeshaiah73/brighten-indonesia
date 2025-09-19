const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, enum: ['Hotel', 'Resto', 'Rumah Sakit', 'Outsourcing'], required: true },
  contactPerson: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: true }
  }
}, { timestamps: true });

ClientSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Client', ClientSchema);