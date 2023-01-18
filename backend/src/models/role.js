const mongoose = require('mongoose');

const { Schema } = mongoose;

const roleSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('roles', roleSchema);
