const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("✅ MongoDB connected");
    }
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
  port: process.env.PORT || 5001,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
};
