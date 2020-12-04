const express = require('express');

// Initialization
const app = express();


// Settings
const port = process.env.PORT || 3000;

// Middlewares
app.use(morgan('dev'));

