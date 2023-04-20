import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../../service/UserService';
import ModalConfirmacion from './modal';
import ValidateAccess from '../../components/validateAccess';
import './style.css';

function ReactivarUsuario() {
    const [users, setUsers] = useState([]);
    const [Confirmacion, setConfirmacion] = useState('');

    useEffect(() => {
        UserService.getUsers()
            .then((res) => {
                setUsers(res.filter((user) => !user.activo));
                // console.log(users)
            })
            .then(() => {
                // console.log(users);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function selectUser(user, e) {
        // console.log(e.target.checked);
        setConfirmacion([user.id, e.target.checked, user.alias]);
    }

    function cancelActivacion(key) {
        const check = document.getElementById(key);
        check.checked = !check.checked;
    }

    return (
        <ValidateAccess>
            <div className="content anexo">
                <p className="title">El anexo</p>
                <table className="admin__table anexo__table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Nivel</th>
                            <th>‎ </th>
                            <th>‎ </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.nombre}</td>
                                <td>{user.infoActi.Nivel}</td>
                                <td>
                                    <Link to={`/userdetails/${user.id}`}>
                                        Detalles
                                    </Link>
                                </td>
                                <td>
                                    <label htmlFor={user.id} className="switch">
                                        <input
                                            type="checkbox"
                                            id={user.id}
                                            name="activo"
                                            onClick={(e) => {
                                                selectUser(user, e);
                                            }}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                    {/* onChange={(e)=>{selectUser(user, e)}} */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/admin">
                    <button className="primary_button">Volver</button>
                </Link>
                {Confirmacion && (
                    <ModalConfirmacion
                        info={Confirmacion}
                        actualizador={setConfirmacion}
                        checkbox={cancelActivacion}
                    />
                )}
            </div>
        </ValidateAccess>
    );
}

export default ReactivarUsuario;
