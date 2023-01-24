const mongoose = require('mongoose');

const { Schema } = mongoose;

const recommendedSchema = new Schema({
    titulo: String,
    enlace: String,
    color: String
});

module.exports = mongoose.model('recommended', recommendedSchema);
