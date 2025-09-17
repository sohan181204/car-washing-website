const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.PORT || 5001,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
};
