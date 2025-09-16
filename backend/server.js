const express = require('express');
const cors = require('cors');

// Routes
const bookingRoutes = require('./routes/bookings');
const serviceRoutes = require('./routes/services');
const subscriptionRoutes = require('./routes/subscriptions');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/bookings', bookingRoutes);
app.use('/services', serviceRoutes);
app.use('/subscriptions', subscriptionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
