import React from 'react';
import profilePhoto from '../../assets/icons/big_icon _profile.svg'
import './style.css'
import {Link} from 'react-router-dom'

function UserDetails(){

  return(
    <div className='UserDetails'>
     <p className='title'>Detalles usuario</p>
      <div className="userdetails__header">
        <div className='profile_photo'>
          <img src={profilePhoto} alt="" />
          <p className='active'>Activo</p>
        </div>
        <div>
          <h3 className='alias'>Alias</h3>
          <p className='textMd'>Leyen Antonio Mejia Dominguez</p>
          <p className='subText'>Leyen@potro.com</p>
        </div>
      </div>
      <button className='btn_examenes'>Gestionar examenes</button>
      <Link to='/usermodify'>
          <button className='primary_button'>Modificar información</button>
      </Link>
      <h3>Informacion general</h3>
      <div className="info_general">
        <p className='text'>ID:216677</p>
        <p className='text'>Semestre: 7</p>
        <p className='text self'>Fecha de nacimiento:<br/>
          29 de septiembre de 2000
        </p>
        <p className='text'>Contraseña: <br/> *******</p>
        <p className='text'>Telefono: <br/> 647126687</p>
      </div>
      <h3>Informacion ACTI</h3>
      <div className="info_acti">
        <p className="text">Nivel:18</p>
        <p className="text">IP:10.21.44.1</p>
        <p className="text especialidad">Especialidad: Full-Stack</p>
        <p className="text rol">Rol: Admin</p>
      </div>
      <p className="textMd">Horario:</p>
      <table>
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
      </table>
      <p className="text">Horas semanales: 10</p>
      <div className="datas">
        <div className="data">Retos realizados: 260</div>
        <div className="data">Examenes aprobados: 18/20</div>
      </div>
      <button className='danger_button'>Inhabilitar usuario</button>
    </div>
  )
}

export default UserDetails