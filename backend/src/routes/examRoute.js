const express = require('express');
const router = express.Router();

const examController = require('../controller/examController');

router
    .route('/')
    .get(examController.getAll)
    .post(examController.post)
    .delete(examController.delAll);

router
    .route('/:id')
    .get(examController.get)
    .put(examController.put)
    .delete(examController.del);

module.exports = router;
