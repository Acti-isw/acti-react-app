const express = require('express');
const router = express.Router();

const userRoute = require('./userRoute');
const roleRoute = require('./roleRoute');
const announcementRoute = require('./announcementRoute');
const topicRoute = require('./topicRoute');
const challengeRoute = require('./challengeRoute');

router.use('/user', userRoute);
router.use('/role', roleRoute);
router.use('/announcement', announcementRoute);
router.use('/topic', topicRoute);
router.use('/challenge', challengeRoute);

module.exports = router;
