const mongoose = require('mongoose');

const { Schema } = mongoose;

const examSchema = new Schema({
    topic: {
        type: Number,
        ref: 'topic'
    },
    exercises: [
        {
            IdReactivo:Number,
            done: Boolean,
            result : Boolean
        }
    ],
    Note: String,
    ScoreExtra: Number,
    FinalScore:Number,
    // IdAplicador
    Applicator: Number,
    Date: Date
});

module.exports = mongoose.model('exams', examSchema);
