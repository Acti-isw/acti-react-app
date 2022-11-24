import React from 'react';
import plus from '../../assets/icons/plus.svg'
import './style.css'
import {
  Link,
} from "react-router-dom";

function Admin (){

  return(
    <div className='admin'>
      <h1>ACTI Admin</h1>
      <div className='banner_activos'>
        <p className='textMd'>Usuarios activos: 
          <br /> 20
        </p>
      </div>
      <table className='admin__table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Proximo examen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Leyen Antonio Mejia Dominguez</td>
            <td>10/12/2022</td>
            <td><Link to="/userdetails">Detalle</Link></td>
          </tr>
          <tr>
            <td>Leyen</td>
            <td>10/12/2022</td>
            <td><Link to="/userdetails">Detalle</Link></td>
          </tr>
          <tr>
            <td>Leyen</td>
            <td>10/12/2022</td>
            <td><Link to="/userdetails">Detalle</Link></td>
          </tr>
        </tbody>
      </table>
      <Link to='/adduser'>
        <button className='primary_button'>Agregar usuario <img src={plus} alt="" /></button>
      </Link>
      <button className='secondary_button'>Rehabilitar usuario</button>
      <button className='secondary_button'>Gestionar avisos</button>
    </div>
  )
}

export default Admin