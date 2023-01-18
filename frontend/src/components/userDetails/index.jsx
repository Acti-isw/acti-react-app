import React, { useState, useEffect } from 'react';
import profilePhoto from '../../assets/icons/big_icon _profile.svg';
import './style.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService';
import Loader from '../loader';
import Horario from '../horario';

function UserDetails() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    // const Datahorario=
    // [
    //     [[false, "lu-09"], [false, "ma-09"], [false, "mi-09"], [false, "ju-09"], [false, "vi-09"]],
    //     [[false, "lu-10"], [false, "ma-10"], [false, "mi-10"], [false, "ju-10"], [false, "vi-10"]],
    //     [[false, "lu-11"], [false, "ma-11"], [false, "mi-11"], [false, "ju-11"], [false, "vi-11"]],
    //     [[false, "lu-12"], [false, "ma-12"], [false, "mi-12"], [false, "ju-12"], [false, "vi-12"]],
    //     [[false, "lu-01"], [false, "ma-01"], [false, "mi-01"], [false, "ju-01"], [false, "vi-01"]],
    //     [[false, "lu-02"], [false, "ma-02"], [false, "mi-02"], [false, "ju-02"], [false, "vi-02"]],
    //     [[false, "lu-03"], [false, "ma-03"], [false, "mi-03"], [false, "ju-03"], [false, "vi-03"]],
    //     [[false, "lu-04"], [false, "ma-04"], [false, "mi-04"], [false, "ju-04"], [false, "vi-04"]],
    //     [[false, "lu-05"], [false, "ma-05"], [false, "mi-05"], [false, "ju-05"], [false, "vi-05"]]
    // ]

    useEffect(() => {
        UserService.getUser(id)
            .then((res) => {
                setUser(res[0]);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    /**Pa borrar en serio */
    const handleDelete = async () => {
        await UserService.deleteUser(id);
        navigate('/admin');
    };
    /** Pa desactivar */
    const handleTurnOff = async () => {
        const data = {
            activo: false
        };
        await UserService.updateUser(id, data);
        navigate('/admin');
    };

    if (loading) return <Loader />;

    return (
        <div className="UserDetails content">
            <p className="title">Detalles usuario</p>
            <div className="userdetails__header">
                <div className="profile_photo">
                    <img src={profilePhoto} alt="" />
                    <p className={user.activo ? 'active' : 'inactive'}>
                        {user.activo ? 'Activo' : 'Anexado'}
                    </p>
                </div>
                <div className="profile_data">
                    <h3 className="alias">{user.alias}</h3>
                    <p className="textMd">{user.nombre}</p>
                    <p className="subText">{user.correo}</p>
                </div>
            </div>
            <button className="btn_examenes">Gestionar examenes</button>
            <Link to={`/usermodify/${user.id}`}>
                <button className="primary_button">
                    Modificar información
                </button>
            </Link>
            <h3>Informacion general</h3>
            <div className="info_general">
                <p className="text">ID:{user.id}</p>
                <p className="text">Semestre: {user.semestre}</p>
                {/* <p className='text self'>Fecha de nacimiento:<br/>
          29 de septiembre de 2000
        </p> */}
                <label className="text" htmlFor="password">
                    Contraseña:
                    <input
                        type="password"
                        id="password"
                        disabled
                        className="password"
                        value="*******"
                    />
                </label>
                <p className="text">
                    Telefono: <br /> {user.telefono}
                </p>
            </div>
            <h3>Informacion ACTI</h3>
            <div className="info_acti">
                <p className="text">Nivel:{user.infoActi.Nivel}</p>
                <p className="text">IP:{user.infoActi.IP}</p>
                <p className="text especialidad">
                    Especialidad: {user.infoActi.Especialidad}
                </p>
                <p className="text rol">Rol: {user.rol.nombre}</p>
            </div>
            <p className="textMd">Horario:</p>
            <Horario
                Datahorario={JSON.parse(user.infoActi.Horario)}
                setDatahorario={null}
                mode={0}
            />
            <div className="datas">
                <div className="data">Retos realizados: 260</div>
                <div className="data">Examenes aprobados: 18/20</div>
            </div>
            {user.activo && <button className="danger_button" onClick={handleTurnOff}>Mandar usuario al anexo</button>}
            
        </div>
    );
}

export default UserDetails;
