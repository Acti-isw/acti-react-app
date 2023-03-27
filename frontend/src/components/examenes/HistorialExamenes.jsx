import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../../service/UserService';
import './style.css'

function HistorialExamanes(){
  const {id} = useParams();
  const [user, setUser] = useState();
  
  useEffect(()=>{
    console.log(id);
    UserService.getUser(id)
    .then((res)=>{
      console.log(res[0]);
      setUser(res[0]);
    });
  },[])

  return(
    <div className='content historialExamenes'>
      <p className='title'>Historial de examenes</p>
      <h3>
        Siguiente examen:<br/>
        10/12/2023
      </h3>
      <p className='textMd'>Tema:Arreglos</p>
      <p className='IReprobacion'>Indice de reprobacion</p>
      <p className='textMd'>Historial de examenes</p>
      <table className='examenes__table '>
        <thead>
          <tr>
            <th>Tema</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr className='examenes__tr'>
            <td >
              <p>JS Básico</p>
            </td>
            <td>
              <p>10/12/2023</p>
            </td>
            <td>
              <p className='estado pendiente'>
                Pendiente
              </p>
            </td>
          </tr>
          <tr className='examenes__tr'>
            <td>
              <p>JS Básico</p>
            </td>
            <td>
              <p>10/12/2023</p>
            </td>
            <td>
              <p className='estado aprobado'>
                Aprobado
              </p>
            </td>
          </tr>
          <tr className='examenes__tr'>
            <td>
              <p>JS Básico</p>
            </td>
            <td>
              <p>10/12/2023</p>
            </td>
            <td>
              <p className='estado reprobado'>
                Reprobado
              </p>
            </td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default HistorialExamanes;