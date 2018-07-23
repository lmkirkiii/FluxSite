const express = require('express');
const router = express.Router();

router.use('/', require('./app.js'));
router.use('/user',require('./user'));
router.use('/flux',require('./flux-post'));


router.all('*', (req, res) => {
    res.status(400).send();
  });

module.exports = router;