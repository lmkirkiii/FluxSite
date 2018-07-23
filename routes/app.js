const express = require('express')
const router = express.Router()
const appIndexController = require("../controllers/app.js")

router.get('/' appIndexController.index);

module.exports = router;