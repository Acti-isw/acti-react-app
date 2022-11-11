const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/users', userController.getAll);

router.post('/u', userController.post);

module.exports = router;
