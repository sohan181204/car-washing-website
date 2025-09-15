const Subscription = require('../models/Subscription');

exports.createSubscription = async (req, res) => {
  try {
    const { customerName, customerEmail, carType, plan, price, endDate } = req.body;
    const subscription = new Subscription({ customerName, customerEmail, carType, plan, price, endDate });
    await subscription.save();
    res.status(201).json({ message: 'Subscription created successfully', subscription });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
