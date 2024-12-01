// customerRoutes.js - Define all customer-related routes

const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Signup routes
router.get('/', customerController.signup); // Homepage - show signup
router.get('/signup', customerController.signup); // Show signup form
router.post('/signup', customerController.createCustomer); // Process signup

// Success page
router.get('/congratulations', (req, res) => {
   res.render('congratulations');
});

// Login routes  
router.get('/login', (req, res) => {
   res.render('index'); 
});
router.post('/login', customerController.getFeedback);

// Feedback routes
router.get('/view-feedback', customerController.viewFeedback); // Admin view
router.post('/submit-feedback', customerController.submitFeedback); // Submit feedback

module.exports = router;