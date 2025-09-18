let subscriptions = [];

exports.createSubscription = (req, res) => {
  try {
    const { customerName, customerEmail, carType, plan, price, endDate } = req.body;
    const subscription = { id: Date.now(), customerName, customerEmail, carType, plan, price, endDate };
    subscriptions.push(subscription);
    res.status(201).json({ message: 'Subscription created successfully', subscription });
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getSubscriptions = (req, res) => {
  try {
    res.json(subscriptions);
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    res.status(500).json({ error: error.message });
  }
};
