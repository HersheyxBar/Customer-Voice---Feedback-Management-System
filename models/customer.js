// models/customer.js - Mongoose schema for customer data

const mongoose = require('mongoose');

// Define customer schema with required fields
const CustomerSchema = new mongoose.Schema({
   firstName: String,
   lastName: String,
   email: { type: String, unique: true }, // Unique email for each customer
   password: String,
   favSport: String,  // Customer's favorite sport
   favTeam: String,   // Customer's favorite team 
   comments: String   // Customer feedback comments
});

// Export Customer model
module.exports = mongoose.model('Customer', CustomerSchema);