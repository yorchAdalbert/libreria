const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Libreria la chida');
});

module.exports = router;
