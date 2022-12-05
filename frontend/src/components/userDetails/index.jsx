import React, { useState, useEffect } from 'react';
import profilePhoto from '../../assets/icons/big_icon _profile.svg';
import './style.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService';

function UserDetails() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const horasFormato = ['09:00AM','10:00AM','11:00AM','12:00PM','01:00PM','02:00PM','03:00PM','04:00PM','05:00PM']
    const horario = [
        [[false, "l-9"], [false, "m-9"], [false, "mi-9"], [true, "j-9"], [true, "vi-9"]],
        [[false, "l-10"], [true, "m-10"], [false, "mi-10"], [true, "j-10"], [false, "vi-10"]],
        [[true, "l-11"], [false, "m-11"], [true, "mi-11"], [true, "j-11"], [true, "vi-11"]],
        [[false, "l-12"], [false, "m-12"], [true, "mi-12"], [true, "j-12"], [false, "vi-12"]],
        [[true, "l-1"], [false, "m-1"], [false, "mi-1"], [true, "j-1"], [true, "vi-1"]],
        [[false, "l-2"], [true, "m-2"], [false, "mi-2"], [false, "j-2"], [true, "vi-2"]],
        [[false, "l-3"], [true, "m-3"], [false, "mi-3"], [false, "j-3"], [false, "vi-3"]],
        [[true, "l-4"], [true, "m-4"], [true, "mi-4"], [true, "j-4"], [true, "vi-4"]],
        [[false, "l-5"], [false, "m-5"], [true, "mi-5"], [true, "j-5"], [true, "vi-5"]]
    ]
    let conteo = 0;
    function contador (){
        conteo++;
        return conteo-1;
    }
        function horassum(){
        let conteo = 0;
        horario.map((hora)=>{
            hora.map((modulo)=>{
                if(modulo[0]){conteo++;}
            })

        })
        return conteo;
    }
    let horasSemana = horassum();

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
            <table className="horario">
        <thead>
            <tr>
                <th>Horas</th>
                <th>Lun</th>
                <th>Mar</th>
                <th>Mie</th>
                <th>Ju</th>
                <th>Vi</th>
            </tr>
        </thead>
        <tbody>
            {horario.map((hora) => (
                <tr>
                    <th>{horasFormato[contador()]}</th>
                    {hora.map((modulo) => (
                            <td  className={modulo[0]?"open":"close"} key={modulo[1]}></td>
                            
                    ))}
                </tr>
                            
            ))}

        </tbody>
      </table>
            <p className="text">Horas semanales: {horasSemana}</p>
            <div className="datas">
                <div className="data">Retos realizados: 260</div>
                <div className="data">Examenes aprobados: 18/20</div>
            </div>
            <button className="danger_button" onClick={handleDelete}>Desactivar usuario</button>
        </div>
    );
}

export default UserDetails;
