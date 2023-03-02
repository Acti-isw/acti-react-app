const mongoose = require('mongoose');

const { Schema } = mongoose;

const recommendedSchema = new Schema({
    titulo: String,
    tipo: Number,
    tema: {
        type: Number,
        ref: 'topic'
    },
    enlace: String
});

module.exports = mongoose.model('recommended', recommendedSchema);
