import React, { useEffect, useState } from 'react';
import plus from '../../assets/icons/plus.svg';
import './style.css';
import { Link } from 'react-router-dom';
import Loader from '../../components/loader';
import ValidateAccess from '../../components/validateAccess';
import UserService from '../../service/UserService';

function Admin() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        UserService.getUsers()
            .then((res) => {
                setUsers(res.filter((user) => user.activo));
                setLoading(false);
            })
            .catch((err) => {
                // console.log(err);
            });
    }, []);

    if (loading) return <Loader />;

    return (
        <ValidateAccess>
            <div className="admin content">
                <h1>ACTI Admin</h1>
                <div className="banner_activos">
                    <p className="textMd">
                        Usuarios activos:
                        <br /> {users.length}
                    </p>
                </div>
                <table className="admin__table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Proximo examen</th>
                            <th>‎ </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.nombre}</td>
                                <td>10/25/20</td>
                                <td>
                                    <Link to={`/userdetails/${user.id}`}>
                                        Expediente
                                    </Link>
                                </td>
                            </tr>
                        ))}

                        {/* <tr>
                        <td>Nombre</td>
                        <td>10/12/2022</td>
                        <td>
                        <Link to="/userdetails">Detalle</Link>
                        </td>
                    </tr> */}
                    </tbody>
                </table>
                <Link to="/adduser">
                    <button className="primary_button btnWithIcon">
                        Agregar usuario <img src={plus} alt="" />
                    </button>
                </Link>
                <Link to="/reactivarusers">
                    <button className="secondary_button">
                        Reactivar usuario
                    </button>
                </Link>
                <Link to="/adminavisos">
                    <button className="secondary_button">
                        Gestionar avisos
                    </button>
                </Link>
                <Link to="/adminrecursos">
                    <button className="secondary_button">
                        Gestionar recursos
                    </button>
                </Link>
                <Link to="/adminrecomendados">
                    <button className="secondary_button">
                        Gestionar recomendados
                    </button>
                </Link>
            </div>
        </ValidateAccess>
    );
}

export default Admin;
