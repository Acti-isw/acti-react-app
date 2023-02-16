const mongoose = require('mongoose');

const { Schema } = mongoose;

const branchSchema = new Schema({
    nombre: String,
    descripcion: String
});

module.exports = mongoose.model('branch', branchSchema);
