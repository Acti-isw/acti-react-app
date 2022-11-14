const express = require('express');
const router = express.Router();

const userRoute = require('./userRoute');
const roleRoute = require('./roleRoute');

router.use('/user', userRoute);
router.use('/role', roleRoute);

module.exports = router;
