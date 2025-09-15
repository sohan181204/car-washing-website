const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  carType: { type: String, enum: ['Hatchback', 'Sedan', 'SUV'], required: true },
  service: { type: String, required: true }, // string instead of ObjectId
  preferredDateTime: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' }
});

module.exports = mongoose.model('Booking', bookingSchema);
