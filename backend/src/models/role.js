const mongoose = require('mongoose');

const { Schema } = mongoose;

const roleSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('roles', roleSchema);
