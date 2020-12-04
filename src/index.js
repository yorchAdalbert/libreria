const express = require('express');
const morgan = require('morgan');

// Initialization
const app = express();


// Settings
const port = process.env.PORT || 3000;

// Middlewares
app.use(morgan('dev'));

// Routes
app.use(require('./routes/index.js'));
