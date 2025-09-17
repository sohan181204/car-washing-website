const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST /api/bookings
router.post('/', bookingController.createBooking);

// GET /api/bookings
router.get('/', bookingController.getBookings);

module.exports = router;
