const express = require('express');
const router = express.Router();

const reactiveController = require('../controller/reactiveController');

router
    .route('/')
    .get(reactiveController.getAll)
    .post(reactiveController.post)
    .delete(reactiveController.delAll);

router
    .route('/:id')
    .get(reactiveController.get)
    .put(reactiveController.put)
    .delete(reactiveController.del);

router.route('/topic/:topic').get(reactiveController.getByTopic);

module.exports = router;
