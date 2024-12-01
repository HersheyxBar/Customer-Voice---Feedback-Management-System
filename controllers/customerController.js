// controllers/customerController.js - Handles customer-related business logic

const Customer = require('../models/customer');

// Render signup page
exports.signup = (req, res) => {
   res.render('signup');
};

// Create new customer account
exports.createCustomer = async (req, res) => {
   try {
       const { firstName, lastName, email, password, favSport, favTeam } = req.body;
       const newCustomer = new Customer({
           firstName,
           lastName, 
           email,
           password,
           favSport,
           favTeam
       });
       await newCustomer.save();
       res.redirect('/congratulations');
   } catch (err) {
       res.status(500).send('Error creating customer');
   }
};

// Handle login and feedback form access 
exports.getFeedback = async (req, res) => {
   try {
       const { email, password } = req.body;

       // Check for admin login
       if (email === 'admin@admin.com' && password === 'pass') {
           return res.redirect('/view-feedback');
       }

       // Verify customer login
       const customer = await Customer.findOne({ email: email, password: password });
       if (!customer) {
           return res.status(401).send('Invalid email or password');
       }

       // Show feedback form with customer data
       res.render('feedback', {
           email: customer.email,
           firstName: customer.firstName,
           lastName: customer.lastName,
           favSport: customer.favSport,
           favTeam: customer.favTeam
       });
   } catch (err) {
       res.status(500).send('Error during login');
   }
};

// Save customer feedback
exports.submitFeedback = async (req, res) => {
   try {
       const { email, comments } = req.body;
       await Customer.updateOne({ email: email }, { comments });
       res.render('thankyou', { firstName: req.body.firstName });
   } catch (err) {
       res.status(500).send('Error saving feedback');
   }
};

// View all customer feedback (admin only)
exports.viewFeedback = async (req, res) => {
   try {
       const customers = await Customer.find({}, 'email firstName lastName favSport favTeam comments');
       res.render('view-feedback', { customers });
   } catch (err) {
       res.status(500).send('Error retrieving feedback');
   }
};