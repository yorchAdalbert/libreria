const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/root.html'));
});

router.get('/addBook', (req, res) => {
  res.send('Adding a new Book');
});

module.exports = router;
