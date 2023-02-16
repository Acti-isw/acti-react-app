const mongoose = require('mongoose');

const { Schema } = mongoose;

const examSchema = new Schema({
    topic: {
        type: Number,
        ref: 'topic'
    },
    rules: String,
    exercises: [
        {
            description: String,
            value: Number
        }
    ],
    minScore: Number
});

module.exports = mongoose.model('exams', examSchema);
