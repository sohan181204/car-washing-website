const Service = require('../models/Service');

exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createService = async (req, res) => {
  try {
    const { name, description, priceRange } = req.body;
    const service = new Service({ name, description, priceRange });
    await service.save();
    res.status(201).json({ message: 'Service created successfully', service });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
