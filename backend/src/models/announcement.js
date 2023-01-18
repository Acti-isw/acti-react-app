const mongoose = require('mongoose');

const { Schema } = mongoose;

const announcementSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    mensaje: { type: String },
    fechaDeExpiracion: { type: Date },
    color: { type: String }
});

module.exports = mongoose.model('announcement', announcementSchema);
