const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// POST /api/subscriptions
router.post('/', subscriptionController.createSubscription);

// GET /api/subscriptions
router.get('/', subscriptionController.getSubscriptions);

module.exports = router;
