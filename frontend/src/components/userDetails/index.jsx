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
    const GestionarExamenes = ()=>{
        navigate(`/gestionarexamenes/${id}`)
    }

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
            <button className="btn_examenes" onClick={GestionarExamenes}>Gestionar examenes</button>
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
