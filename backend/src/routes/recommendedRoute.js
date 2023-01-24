const express = require('express');
const router = express.Router();

const challengeController = require('../controller/challengeController');

router
    .route('/')
    .get(challengeController.getAll)
    .post(challengeController.post)
    .delete(challengeController.delAll);

router
    .route('/:id')
    .get(challengeController.get)
    .put(challengeController.put)
    .delete(challengeController.del);

module.exports = router;
