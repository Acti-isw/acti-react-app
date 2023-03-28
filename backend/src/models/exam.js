const mongoose = require('mongoose');

const { Schema } = mongoose;

const examSchema = new Schema(  {
    user:{
        type:Number
    },
    topic: {
        type: Number,
        ref: 'topic'
    },
    reactives: [
        {
            IdReactivo: Number,
            done: Boolean,
            result: Boolean
        }
    ],
    timeOver:Boolean,
    Note: String,
    ScoreExtra: Number,
    FinalScore: Number,
    FinalResult:Boolean,
    // IdAplicador
    Applicator: Number,
    Date: Date
});

module.exports = mongoose.model('exams', examSchema);
