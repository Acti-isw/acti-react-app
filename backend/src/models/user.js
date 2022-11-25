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
        required: true
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
        type: String
    },
    activo: {
        type: Boolean,
        default: true
    },
    rol: {
        // type: Schema.Types.ObjectId,
        type: Number,
        ref: 'role'
        // autopopulate: true
    },
    correo: {
        type: String
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
    examenes: [
        {
            examen: {
                type: Schema.Types.ObjectId,
                ref: 'exam'
            },
            aplicador: {
                type: String
            },
            fecha: {
                type: Date,
                required: true
            },
            puntajeMinimo: {
                type: Number
            },
            puntajeObtenido: {
                type: Number
            },
            resultado: {
                type: Number
            },
            puntajeExtra: Number,
            nota: String
        }
    ],
    fechaNacimiento: {
        type: Date
    },
    fechaRetorno: {
        type: Date
    }
});

module.exports = mongoose.model('users', userSchema);
