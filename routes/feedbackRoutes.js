// feedbackRoutes.js - Routes for feedback handling

const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Root route - Show login page
router.get('/', feedbackController.getLogin); 

// Handle login and show feedback form
router.post('/feedback', feedbackController.postLogin); 

// Process feedback submission
router.post('/submit-feedback', feedbackController.postFeedback); 

module.exports = router;