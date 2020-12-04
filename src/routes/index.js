const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Libreria la chida');
});

router.get('/addBook', (req, res) => {
  res.send('Adding a new Book');
});

module.exports = router;
