const express = require('express');
const morgan = require('morgan');

// Initialization
const app = express();


// Settings
const port = process.env.PORT || 3000;

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use(require('./routes/index.js'));

// Global
app.use((req, res, next) => {

  next();
});

// Starting the server
app.listen(port, () => {
  console.log(`Listening on Port: ${port} `);
});
