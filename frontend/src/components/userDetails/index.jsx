import React, {useState, useEffect} from 'react';
import profilePhoto from '../../assets/icons/big_icon _profile.svg'
import './style.css'
import {Link, useParams} from 'react-router-dom'

function UserDetails(){
  const {id}= useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:3000/user/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data[0]))
  }, []);

  return(
    <div className='UserDetails'>
     <p className='title'>Detalles usuario</p>
      <div className="userdetails__header">
        <div className='profile_photo'>
          <img src={profilePhoto} alt="" />
          <p className={user.activo?'active':'inactive'}>{user.activo?'Activo':'Inactivo'}</p>
        </div>
        <div className='profile_data'>
          <h3 className='alias'>{user.alias}</h3>
          <p className='textMd'>{user.nombre}</p>
          <p className='subText'>{user.correo}</p>
        </div>
      </div>
      <button className='btn_examenes'>Gestionar examenes</button>
      <Link to={`/usermodify/${user.id}`}>
          <button className='primary_button'>Modificar información</button>
      </Link>
      <h3>Informacion general</h3>
      <div className="info_general">
        <p className='text'>ID:{user.id}</p>
        <p className='text'>Semestre: {user.semestre}</p>
        {/* <p className='text self'>Fecha de nacimiento:<br/>
          29 de septiembre de 2000
        </p> */}
        <label className="text" htmlFor="password">Contraseña:
        <input type="password" id='password' disabled className='password' value="*******"/>
        </label>
        <p className='text'>Telefono: <br/> {user.telefono}</p>
      </div>
      <h3>Informacion ACTI</h3>
      <div className="info_acti">
        <p className="text">Nivel:{user.infoActi?.Nivel}</p>
        <p className="text">IP:{user.infoActi?.IP}</p>
        <p className="text especialidad">Especialidad: {user.infoActi?.Especialidad}</p>
        <p className="text rol">Rol: {user.rol==1?'Admin':'Miembro'}</p>
      </div>
      <p className="textMd">Horario:</p>
      {/* <table>
        <thead>
          <th>Horas</th>
          <th>Lun</th>
          <th>Mar</th>
          <th>Mie</th>
          <th>Ju</th>
          <th>Vi</th>
        </thead>
        <tbody>
          <tr>
            <th>9:00AM</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table> */}
      <p className="text">Horas semanales: 10</p>
      <div className="datas">
        <div className="data">Retos realizados: 260</div>
        <div className="data">Examenes aprobados: 18/20</div>
      </div>
      <button className='danger_button'>Desactivar usuario</button>
    </div>
  )
}

export default UserDetails