const mongoose = require('mongoose');

const { Schema } = mongoose;

const examSchema = new Schema({
    // id: {
    //     type: Number,
    //     required: true
    // },
    // content: {
    topic: {
        type: Number,
        ref: 'topics'
    },
    rules: String,
    exercises: [
        {
            description: String,
            value: Number,
        }
    ],
    minScore: Number
    // }
});

module.exports = mongoose.model('exams', examSchema);
