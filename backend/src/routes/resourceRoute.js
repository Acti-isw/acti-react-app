const express = require('express');
const router = express.Router();

const resourceController = require('../controller/resourceController');

router
    .route('/')
    .get(resourceController.getAll)
    .post(resourceController.post)
    .delete(resourceController.delAll);

router
    .route('/:id')
    .get(resourceController.get)
    .put(resourceController.put)
    .delete(resourceController.del);

module.exports = router;
