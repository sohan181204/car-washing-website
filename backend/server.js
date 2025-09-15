const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { connectDB, port } = require('./config');

// Routes
const bookingRoutes = require('./routes/bookings');
const serviceRoutes = require('./routes/services');
const subscriptionRoutes = require('./routes/subscriptions');
// Payment routes removed

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ensure DB connection before handling requests
app.use(async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await connectDB();
    }
    next();
  } catch (error) {
    console.error('DB connection failed:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connect to DB
connectDB();

// Start server only if running locally (Vercel will handle serverless)
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
