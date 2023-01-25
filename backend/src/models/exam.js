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
    exercises: [
        {
            description: String,
            value: Number,
            State: Boolean
        }
    ],
    minScore: Number
    // }
});

module.exports = mongoose.model('exams', examSchema);
