import React, { useState, useEffect } from 'react';
import profilePhoto from '../../assets/icons/big_icon _profile.svg';
import './style.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService';
import Horario from '../horario';

function UserDetails() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
  
    // const Datahorario=[
    //     [[false, "lu-09"], [false, "ma-09"], [false, "mi-09"], [true, "ju-09"], [true, "vi-09"]],
    //     [[false, "lu-10"], [true, "ma-10"], [false, "mi-10"], [true, "ju-10"], [false, "vi-10"]],
    //     [[true, "lu-11"], [false, "ma-11"], [true, "mi-11"], [true, "ju-11"], [true, "vi-11"]],
    //     [[false, "lu-12"], [false, "ma-12"], [true, "mi-12"], [true, "ju-12"], [false, "vi-12"]],
    //     [[true, "lu-01"], [false, "ma-01"], [false, "mi-01"], [true, "ju-01"], [true, "vi-01"]],
    //     [[false, "lu-02"], [true, "ma-02"], [false, "mi-02"], [false, "ju-02"], [true, "vi-02"]],
    //     [[false, "lu-03"], [true, "ma-03"], [false, "mi-03"], [false, "ju-03"], [false, "vi-03"]],
    //     [[true, "lu-04"], [true, "ma-04"], [true, "mi-04"], [true, "ju-04"], [true, "vi-04"]],
    //     [[false, "lu-05"], [false, "ma-05"], [true, "mi-05"], [true, "ju-05"], [true, "vi-05"]]
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

    const handleDelete = async () => {
      await UserService.deleteUser(id);
      navigate('/admin');
  };

    // insert a better loading component
    if (loading) return <h1>Cargando...</h1>;

    return (
        <div className="UserDetails">
            <p className="title">Detalles usuario</p>
            <div className="userdetails__header">
                <div className="profile_photo">
                    <img src={profilePhoto} alt="" />
                    <p className={user.activo ? 'active' : 'inactive'}>
                        {user.activo ? 'Activo' : 'Inactivo'}
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
                <p className="text">Nivel:{user.infoActi?.Nivel}</p>
                <p className="text">IP:{user.infoActi?.IP}</p>
                <p className="text especialidad">
                    Especialidad: {user.infoActi?.Especialidad}
                </p>
                <p className="text rol">
                    Rol: {user.rol == 1 ? 'Admin' : 'Miembro'}
                </p>
            </div>
            <p className="textMd">Horario:</p>
            <Horario Datahorario={JSON.parse(user.infoActi?.Horario)} setDatahorario = {null} mode={0}/>
            <div className="datas">
                <div className="data">Retos realizados: 260</div>
                <div className="data">Examenes aprobados: 18/20</div>
            </div>
            <button className="danger_button" onClick={handleDelete}>Desactivar usuario</button>
        </div>
    );
}

export default UserDetails;
