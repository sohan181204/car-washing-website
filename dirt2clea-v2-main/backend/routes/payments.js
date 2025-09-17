const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// POST /api/payments/create-order
router.post('/create-order', paymentController.createOrder);

// POST /api/payments/webhook
router.post('/webhook', paymentController.handleWebhook);

module.exports = router;
