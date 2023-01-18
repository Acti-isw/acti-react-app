const express = require('express');
const router = express.Router();
const announcementController = require('../controller/announcementController');

router
    .route('/')
    .get(announcementController.getAll)
    .post(announcementController.post)
    .delete(announcementController.delAll);

router.route('/:id').delete(announcementController.del);

module.exports = router;
