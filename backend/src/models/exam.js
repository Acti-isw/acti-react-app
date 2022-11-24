const mongoose = require('mongoose');

const { Schema } = mongoose;

const examSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    tema: [{}]
});

module.exports = mongoose.model('exams', examSchema);
