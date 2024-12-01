// config/config.js - MongoDB configuration

require('dotenv').config();

module.exports = {
   mongoUri: process.env.MONGO_URI || 'mongodb://localhost/customerFeedbackDB'
};