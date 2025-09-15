const Booking = require('../models/Booking');
const nodemailer = require('nodemailer');
const { emailUser, emailPass } = require('../config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass
  }
});

exports.createBooking = async (req, res) => {
  try {
    const { name, phone, address, carType, service, preferredDateTime } = req.body;
    const booking = new Booking({ name, phone, address, carType, service, preferredDateTime });
    await booking.save();

    // Send confirmation email
    const mailOptions = {
      from: emailUser,
      to: 'customer@example.com', // Replace with actual email
      subject: 'Booking Confirmation',
      text: `Your booking for ${carType} service on ${preferredDateTime} has been confirmed.`
    };
    transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('service');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
