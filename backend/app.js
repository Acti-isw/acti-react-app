const colors = require('utils/colors.util');
const { port } = require('config/general.config');
const { startMongoDB, startMongoAtlas } = require('services/dbService');
const app = require('./src/server');

if (process.env.NODE_ENV === 'mongo') startMongoDB();
else startMongoAtlas();

app.listen(port, process.env.HOST, () => {
    console.log(
        colors.debug(`API running on http://${process.env.HOST}:${port} !`)
    );
});
