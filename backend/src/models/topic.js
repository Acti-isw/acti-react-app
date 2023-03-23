const mongoose = require('mongoose');

const { Schema } = mongoose;

const topicSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        default: ''
    },
    listadoConocimiento: {
        type: Array,
        default: []
    },
    tecnologia: {
        type: String,
        default: ''
    },
    minScore:Number,
    maxScore:Number,
    timeExam: Number,
    examRules: String,
    examResources : String
});

module.exports = mongoose.model('topics', topicSchema);
