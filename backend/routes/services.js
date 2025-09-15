const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// GET /api/services → List services
router.get('/', serviceController.getServices);

// POST /api/services → Add a new service
router.post('/', serviceController.createService);

module.exports = router;
