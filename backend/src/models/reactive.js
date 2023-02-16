const mongoose = require('mongoose');

const { Schema } = mongoose;

const reactiveSchema = new Schema({
    topic: {
        type: Number,
        ref: 'topic'
    },
    valor: Number,
    markdown: String
});

module.exports = mongoose.model('reactives', reactiveSchema);
