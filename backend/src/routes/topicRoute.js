const express = require('express');
const router = express.Router();
const topicController = require('../controller/topicController');

router
    .route('/')
    .get(topicController.getAll)
    .post(topicController.post)
    .delete(topicController.delAll);

router
    .route('/:id')
    .get(topicController.get)
    .put(topicController.put)
    .delete(topicController.del);

module.exports = router;
