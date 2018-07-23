const express = require('express');
const router = express.Router();

router.use('/', require('./app.js'));
router.use('/user',require('./user'));
router.use('/flux',require('./flux-post'));

module.exports = router;