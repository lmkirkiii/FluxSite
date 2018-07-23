const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.js');

router.get('/login', userController.new);
router.post('/login', userController.show);
router.get('/sign-up', userController.create);



module.exports = router;