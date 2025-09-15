const Razorpay = require('razorpay');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Insta = require('instamojo-nodejs');
const { razorpayKeyId, razorpayKeySecret } = require('../config');

const razorpay = new Razorpay({
  key_id: razorpayKeyId,
  key_secret: razorpayKeySecret,
});

Insta.setKeys(process.env.INSTAMOJO_API_KEY, process.env.INSTAMOJO_AUTH_TOKEN);

exports.createOrder = async (req, res) => {
  try {
    const { amount, currency = 'INR', paymentMethod } = req.body;

    if (paymentMethod === 'razorpay') {
      const options = {
        amount: amount * 100, // Razorpay expects amount in paisa
        currency,
        receipt: 'receipt#1',
      };
      const order = await razorpay.orders.create(options);
      res.json(order);
    } else if (paymentMethod === 'stripe') {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency,
      });
      res.json({ client_secret: paymentIntent.client_secret });
    } else if (paymentMethod === 'instamojo') {
      const data = new Insta.PaymentData();
      data.purpose = 'Car Wash Service';
      data.amount = amount;
      data.buyer_name = 'Customer Name';
      data.email = 'customer@example.com';
      data.phone = '9999999999';
      data.send_email = false;
      data.send_sms = false;
      data.setRedirectUrl('http://localhost:3000/success');

      Insta.createPayment(data, (error, response) => {
        if (error) {
          res.status(500).json({ error });
        } else {
          res.json(response);
        }
      });
    } else {
      res.status(400).json({ error: 'Invalid payment method' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.handleWebhook = async (req, res) => {
  // Handle payment webhooks for confirmation
  // Implement based on payment gateway
  res.json({ status: 'ok' });
};
