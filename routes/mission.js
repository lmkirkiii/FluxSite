const express = require('express')
const router = express.Router()
const missionController = require('../controllers/mission.js')

router.get('/', missionController.show);

module.exports = router;
