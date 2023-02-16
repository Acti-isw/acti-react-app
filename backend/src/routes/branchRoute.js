const express = require('express');
const router = express.Router();

const branchController = require('../controller/branchController');

router
    .route('/')
    .get(branchController.getAll)
    .post(branchController.post)
    .delete(branchController.delAll);

router
    .route('/:id')
    .get(branchController.get)
    .put(branchController.put)
    .delete(branchController.del);

module.exports = router;
