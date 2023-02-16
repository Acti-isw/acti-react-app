const express = require('express');
const router = express.Router();

const userRoute = require('./userRoute');
const roleRoute = require('./roleRoute');
const announcementRoute = require('./announcementRoute');
const topicRoute = require('./topicRoute');
const challengeRoute = require('./challengeRoute');
const resourceRoute = require('./resourceRoute');
const recommendedRoute = require('./recommendedRoute');
const examRoute = require('./examRoute');
const reactiveRoute = require('./reactiveRoute');
const branchRoute = require('./branchRoute');

router.use('/user', userRoute);
router.use('/role', roleRoute);
router.use('/announcement', announcementRoute);
router.use('/topic', topicRoute);
router.use('/challenge', challengeRoute);
router.use('/resource', resourceRoute);
router.use('/recommended', recommendedRoute);
router.use('/exam', examRoute);
router.use('/reactive', reactiveRoute);
router.use('/branch', branchRoute);

module.exports = router;
