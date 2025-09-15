const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// POST /api/subscriptions → Create subscription
router.post('/', subscriptionController.createSubscription);

// GET /api/subscriptions → Get all subscriptions
router.get('/', subscriptionController.getSubscriptions);

module.exports = router;
