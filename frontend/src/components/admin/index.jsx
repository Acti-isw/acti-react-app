import React, { useEffect, useState } from 'react';
import plus from '../../assets/icons/plus.svg';
import './style.css';
import { Link } from 'react-router-dom';

function Admin() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then((response) => response.json())
            .then((data) => setUsers(data));
            // .then(console.log(`Los usuarios son ${users}`));
    }, []);

    return (
        <div className="admin">
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
                              <Link to={`/userdetails/${user.id}`}>Detalles</Link>
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
                <button className="primary_button">
                    Agregar usuario <img src={plus} alt="" />
                </button>
            </Link>
            <button className="secondary_button">Reactivar usuario</button>
            <button className="secondary_button">Gestionar avisos</button>
        </div>
    );
}

export default Admin;
