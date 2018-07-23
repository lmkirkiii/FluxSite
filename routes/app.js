const express = require('express')
const router = express.Router()
const appIndexController = require("../controllers/app")

router.get('/' appIndexController.action)

module.exports = router;