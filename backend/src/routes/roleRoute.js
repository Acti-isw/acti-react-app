const express = require('express');
const router = express.Router();
const roleController = require('../controller/roleController');

router
    .route('/')
    .get(roleController.getAll)
    .post(roleController.post)
    .delete(roleController.delAll);

router
    .route('/:id')
    .get(roleController.get)
    .put(roleController.put)
    .delete(roleController.del);

module.exports = router;
