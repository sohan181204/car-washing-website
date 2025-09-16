let subscriptions = []; // In-memory storage

exports.createSubscription = (req, res) => {
  try {
    const { customerName, customerEmail, carType, plan, price, endDate } = req.body;
    const subscription = { id: Date.now(), customerName, customerEmail, carType, plan, price, endDate, status: 'Active' };
    subscriptions.push(subscription);
    res.status(201).json({ message: 'Subscription created successfully', subscription });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSubscriptions = (req, res) => {
  res.json(subscriptions);
};
