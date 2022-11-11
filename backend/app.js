const express = require('express');
const app = express();

const { port } = require('./src/config/general.config');
const { startMongoDB, startMongoAtlas } = require('./src/services/dbService');
const logger = require('./src/middleware/logs');

const userRoute = require('./src/routes/userRoute');

app.use(express.json());
app.use(express.static('public'));

app.use(logger());
if (process.env.NODE_ENV === 'mongo') {
    startMongoDB();
} else {
    startMongoAtlas();
}

app.use('/api', userRoute);

app.listen(port, () => {
    console.log(`API running on port: ${port}!`);
});
