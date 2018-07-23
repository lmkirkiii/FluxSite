const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.js');

router.get('/login', userController.login)
router.post('/login', userController.createLogin)
router.get('/sign-up', userController.signUp)
router.post('/sign-up', userController.createSignUp);


module.exports = router;