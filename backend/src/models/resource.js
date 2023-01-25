const mongoose = require('mongoose');

const { Schema } = mongoose;

const resourceSchema = new Schema({
    titulo: String,
    enlace: String,
    color: String
});

module.exports = mongoose.model('resource', resourceSchema);
