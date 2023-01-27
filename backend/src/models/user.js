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
        type: Number,
        ref: 'role'
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
        },
        Horario: {
            type: String,
            default: `[
                [[false, "lu-09"], [false, "ma-09"], [false, "mi-09"], [false, "ju-09"], [false, "vi-09"]],
                [[false, "lu-10"], [false, "ma-10"], [false, "mi-10"], [false, "ju-10"], [false, "vi-10"]],
                [[false, "lu-11"], [false, "ma-11"], [false, "mi-11"], [false, "ju-11"], [false, "vi-11"]],
                [[false, "lu-12"], [false, "ma-12"], [false, "mi-12"], [false, "ju-12"], [false, "vi-12"]],
                [[false, "lu-01"], [false, "ma-01"], [false, "mi-01"], [false, "ju-01"], [false, "vi-01"]],
                [[false, "lu-02"], [false, "ma-02"], [false, "mi-02"], [false, "ju-02"], [false, "vi-02"]],
                [[false, "lu-03"], [false, "ma-03"], [false, "mi-03"], [false, "ju-03"], [false, "vi-03"]],
                [[false, "lu-04"], [false, "ma-04"], [false, "mi-04"], [false, "ju-04"], [false, "vi-04"]],
                [[false, "lu-05"], [false, "ma-05"], [false, "mi-05"], [false, "ju-05"], [false, "vi-05"]]
            ]`
        }
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
            reactivos: [ {state: Boolean} ],
            puntajeObtenido: {
                type: Number
            },
            resultadoPreliminar: Number,
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
