import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

function CrearUsuario() {
    const navigate = useNavigate();
    // let newUser = {
    //     nombre: 'nombre',
    //     id: 0,
    //     contraseña: '12345',
    //     alias: '',
    //     semestre: 0,
    //     // telefono:"6400000000",
    //     activo: true,
    //     // correo:"correo@potros.itson.edu.mx",
    //     intentos: 0,
    //     examenes: [],
    //     rol: 2,
    //     infoActi: {
    //         // IP:"10.21.44.00",
    //         Nivel: 0,
    //         Especialidad: 'Ninguna'
    //     }
    // };

    // function submit(e) {
    //     e.preventDefault();
    //     newUser.id = document.getElementById('id').value;
    //     newUser.nombre = document.getElementById('nombre').value;
    //     newUser.alias = document.getElementById('alias').value;
    //     newUser.contraseña = document.getElementById('contraseña').value;
    //     newUser.email = document.getElementById('email').value;
    //     newUser.semestre = document.getElementById('semestre').value;
    //     newUser.infoActi.IP = document.getElementById('ip').value;
    //     newUser.infoActi.rol =
    //         document.getElementById('rol').value == 'Estudiante' ? 1 : 2;
    //     addUser();

    //     // console.log(newUser);
    // }
    // document.addEventListener('submit', submit);

    // async function addUser() {
    //     try {
    //         console.log(newUser);
    //         let res = await fetch('http://localhost:3000/user', {
    //             method: 'POST',
    //             body: JSON.stringify(newUser),
    //             headers: {
    //                 'Content-type': 'application/json'
    //             }
    //         });

    //         if (!res.ok) {
    //             throw res;
    //         }
    //         navigate('/admin');
    //     } catch (e) {
    //         // console.log(e)
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3000/user', {
            method: 'POST',
            body: JSON.stringify({
                nombre: e.target.nombre.value,
                id: e.target.id.value,
                contraseña: e.target.contraseña.value,
                alias: e.target.alias.value,
                semestre: e.target.semestre.value,
                telefono: '6400000000',
                activo: true,
                correo: e.target.correo.value,
                intentos: 0,
                examenes: [],
                rol: e.target.rol.value,
                infoActi: {
                    IP: e.target.ip.value,
                    Nivel: 0,
                    Especialidad: 'Ninguna'
                }
            }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const result = await response.json();
        console.log(result);
        navigate('/admin');
    };

    return (
        <div className="crearUsuario">
            <p className="title">Crear nuevo usuario</p>
            <form
                onSubmit={handleSubmit}
                // action="/users"
                autoComplete="off"
                className="formCreateUser"
                // onSubmit={return false}
            >
                <label htmlFor="nombre">
                    Nombre:
                    <input
                        required
                        name="nombre"
                        type="text"
                        className="input_type1 input_addUser"
                        placeholder="Nombre usuario"
                    />
                </label>
                <label htmlFor="id">
                    ID:
                    <input
                        required
                        name="id"
                        type="number"
                        className="input_type1 input_addUser"
                        placeholder="Ingrese ID sin ceros"
                    />
                </label>
                <label htmlFor="semestre">
                    Semestre:
                    <input
                        required
                        name="semestre"
                        type="number"
                        className="input_type1 input_addUser"
                        placeholder="Ingresa el semestre"
                    />
                </label>
                <label htmlFor="alias">
                    Alias:
                    <input
                        name="alias"
                        type="text"
                        className="input_type1 input_addUser"
                        placeholder="Ingrese el alias del usuario"
                    />
                </label>
                <label htmlFor="contraseña">
                    Contraseña predetermianda:
                    <input
                        required
                        name="contraseña"
                        type="password"
                        className="input_type1 input_addUser"
                        placeholder=""
                    />
                </label>
                <label htmlFor="email">
                    Correo:
                    <input
                        name="correo"
                        type="email"
                        className="input_type1 input_addUser"
                        placeholder="ejemplo@potros.itson.edu.mx"
                    />
                </label>
                <h3>Informacion ACTI</h3>
                <label htmlFor="ip">
                    IP:
                    <input
                        name="ip"
                        type="text"
                        className="input_type1 input_addUser"
                        placeholder="10.21.44.00"
                    />
                </label>
                <label htmlFor="rol">
                    Rol:
                    <select
                        required
                        name="rol"
                        className="input_type1 input_addUser"
                    >
                        <option value="2">Miembro</option>
                        <option value="1">Admin</option>
                    </select>
                </label>
                <div className="buttonsBox">
                    <input
                        id="submit"
                        type="submit"
                        className="primary_button"
                        // onClick={submit}
                        value={'Guardar'}
                    />
                    <Link to="/admin">
                        <button className="secondary_button">Cancelar</button>
                    </Link>

                    {/* <button className="primary_button">Guardar</button> */}
                </div>
            </form>
        </div>
    );
}

export default CrearUsuario;
