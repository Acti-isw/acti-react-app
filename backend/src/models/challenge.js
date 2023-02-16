const mongoose = require('mongoose');

const { Schema } = mongoose;

const challengeSchema = new Schema({
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    nombre: {
        type: String
    },
    indicaciones: {
        type: String
    },
    tema: {
        type: Number,
        ref: 'topic'
    },
    complejidad: {
        type: Boolean
    },
    imagenes: {
        type: Array
    },
    hipervinculo: {
        type: String
    },
    recursos: {
        type: Array
    },
    guias: {
        type: Array
    },
    dificultad: {
        type: Number
    }
});

module.exports = mongoose.model('challenge', challengeSchema);
