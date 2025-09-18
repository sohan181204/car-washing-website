const express = require('express');
const cors = require('cors');
const { port } = require('./config');

// Import your routes
const bookingRoutes = require('./routes/bookings');
const serviceRoutes = require('./routes/services');
const subscriptionRoutes = require('./routes/subscriptions');

const app = express();

// Recommended CORS config: allow your frontend domain
const allowedOrigins = [
  'http://localhost:3000', // for local development
];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'CORS policy does not allow this origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes with /api prefix
app.use('/api/bookings', bookingRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
