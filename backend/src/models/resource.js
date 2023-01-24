const mongoose = require('mongoose');

const { Schema } = mongoose;

const resourceSchema = new Schema({
    titulo: String,
    tipo: Boolean,
    tema: {
        type: Number,
        ref: 'topic'
    },
    enlace: String
});

module.exports = mongoose.model('resource', resourceSchema);
