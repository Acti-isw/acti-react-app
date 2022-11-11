const { db } = require('../config/db.config');
const mongoose = require('mongoose');

const startMongoDB = () => {
    mongoose
        .connect(`mongodb://${db.host}:${db.port}/${db.name}`)
        .then(() => console.log('Connected to MongoDB'))
        .catch((err) => console.log('Could not connect to MongoDB', err));
};

const startMongoAtlas = () => {
    console.log('Connected to MongoAtlas');
};

module.exports = {
    startMongoDB,
    startMongoAtlas
};
