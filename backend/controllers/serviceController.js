const services = [
  {
    id: 1,
    name: 'Basic Wash',
    description: 'Exterior wash and dry',
    priceRange: { min: 500, max: 1000 }
  },
  {
    id: 2,
    name: 'Premium Wash',
    description: 'Interior and exterior cleaning',
    priceRange: { min: 1000, max: 2000 }
  },
  {
    id: 3,
    name: 'Deluxe Wash',
    description: 'Full detailing service',
    priceRange: { min: 2000, max: 5000 }
  }
];

exports.getServices = (req, res) => {
  res.json(services);
};

exports.createService = (req, res) => {
  const { name, description, priceRange } = req.body;
  const service = { id: Date.now(), name, description, priceRange };
  services.push(service);
  res.status(201).json({ message: 'Service created successfully', service });
};
