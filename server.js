// server.js - Main application entry point

const express = require('express');
const bodyParser = require('body-parser');
const mongooseSetup = require('./config/mongoose');
const customerRoutes = require('./routes/customerRoutes');
const path = require('path');

const app = express();
mongooseSetup(); // Initialize MongoDB connection

// Configure view engine and middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Route handling
app.use('/', customerRoutes);

// Start server
app.listen(3000, () => {
   console.log('Server running at http://localhost:3000/');
});