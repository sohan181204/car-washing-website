let services = [
  { id: 1, name: 'Basic Wash', description: 'Exterior wash and dry', price: 500, duration: '30 mins' },
  { id: 2, name: 'Premium Wash', description: 'Interior and exterior cleaning', price: 1000, duration: '1 hour' },
  { id: 3, name: 'Deluxe Wash', description: 'Full detailing service', price: 1500, duration: '2 hours' }
];

exports.createService = (req, res) => {
  const { name, description, price, duration } = req.body;
  const service = { id: Date.now(), name, description, price, duration };
  services.push(service);
  res.status(201).json({ message: 'Service created successfully', service });
};

exports.getServices = (req, res) => {
  res.json(services);
};
