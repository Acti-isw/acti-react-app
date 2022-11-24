const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    contraseña: {
        type: String,
        required: true,
        default: '123456'
    },
    nombre: {
        type: String,
        required: true
    },
    alias: String,
    semestre: {
        type: Number,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        required: true
    },
    rol: {
        // type: Schema.Types.ObjectId,
        type: Number,
        default: 1,
        ref: 'role'
        // autopopulate: true
    },
    correo: {
        type: String,
        required: true
    },
    infoActi: {
        IP: String,
        Nivel: {
            type: Number,
            default: 0
        },
        Especialidad: {
            type: String,
            default: 'Ninguna'
        }
        // Horario: {
        //     type:
        // }
    },
    intentos: {
        type: Number,
        default: 2
    },
    activo: {
        type: Boolean,
        default: true
    },
    examenes: [
        {
            examen: {
                type: Schema.Types.ObjectId,
                ref: 'exam'
            },
            aplicador: {
                type: String,
                required: true
            },
            fecha: {
                type: Date,
                required: true
            },
            puntajeMinimo: {
                type: Number,
                required: true
            },
            puntajeObtenido: {
                type: Number,
                required: true
            },
            resultado: {
                type: Number,
                required: true
            },
            puntajeExtra: Number,
            nota: String
        }
    ],
    fechaRetorno: {
        type: Date
    }
});

module.exports = mongoose.model('users', userSchema);
