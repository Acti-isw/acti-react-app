const { db, atlas } = require('../config/db.config');
const colors = require('utils/colors.util');
const mongoose = require('mongoose');

const startMongoDB = () => {
    mongoose
        .connect(`mongodb://${db.host}:${db.port}/${db.name}`)
        .then(() => console.log(colors.silly('Connected to MongoDB')))
        .catch((err) =>
            console.log(colors.error('Could not connect to MongoDB', err))
        );
};

const startMongoAtlas = () => {
    mongoose
        .connect(atlas.url)
        .then(() => console.log(colors.info('Connected to MongoDB Atlas')))
        .catch((err) =>
            console.log(colors.error('Could not connect to MongoDB Atlas', err))
        );
};

module.exports = {
    startMongoDB,
    startMongoAtlas
};
