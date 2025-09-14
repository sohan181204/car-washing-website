const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  carType: { type: String, enum: ['Hatchback', 'Sedan', 'SUV'], required: true },
  plan: { type: String, required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ['Active', 'Inactive', 'Cancelled'], default: 'Active' },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
