// config/mongoose.js - MongoDB connection setup

const mongoose = require('mongoose');
const config = require('./config');

function mongooseSetup() {
   // Connect to MongoDB using URI from config
   mongoose.connect(config.mongoUri);
   const db = mongoose.connection;

   // Handle connection events
   db.on('error', console.error.bind(console, 'Connection error:'));
   db.once('open', () => {
       console.log('Connected to MongoDB');
   });
}

module.exports = mongooseSetup;