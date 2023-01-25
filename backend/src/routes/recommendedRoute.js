const express = require('express');
const router = express.Router();

const recommendedController = require('../controller/recommendedController');

router
    .route('/')
    .get(recommendedController.getAll)
    .post(recommendedController.post)
    .delete(recommendedController.delAll);

router
    .route('/:id')
    .get(recommendedController.get)
    .put(recommendedController.put)
    .delete(recommendedController.del);

module.exports = router;
