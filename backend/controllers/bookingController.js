const nodemailer = require('nodemailer');

const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailUser,
    pass: emailPass
  }
});

let bookings = []; // In-memory storage

exports.createBooking = async (req, res) => {
  try {
    const { name, phone, address, carType, service, preferredDateTime } = req.body;
    const booking = { id: Date.now(), name, phone, address, carType, service, preferredDateTime };
    bookings.push(booking);

    // Send confirmation email
    const mailOptions = {
      from: emailUser,
      to: 'dirt2clean2909@gmail.com', // Updated to actual email
      subject: 'Booking Confirmation',
      text: `Your booking for ${carType} service on ${preferredDateTime} has been confirmed.`
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Email send error:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.status(201).json({ message: 'Booking created successfully', booking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getBookings = (req, res) => {
  res.json(bookings);
};
