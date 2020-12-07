const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/root.html'));
});

router.get('/addBook', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/add_book.html'));
});

module.exports = router;
