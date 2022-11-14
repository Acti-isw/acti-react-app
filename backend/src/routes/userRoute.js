const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router
    .route('/')
    .get(userController.getAll)
    .post(userController.post)
    .delete(userController.delAll);

router
    .route('/:id')
    .get(userController.get)
    .put(userController.put)
    .delete(userController.del);

module.exports = router;
