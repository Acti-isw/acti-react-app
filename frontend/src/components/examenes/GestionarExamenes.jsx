import React from 'react';
import './style.css'

function GestionarExamenes(){
  
  return(
    <div className='content gestionExamenes'>
      <h3 className=''>
        Alias
      </h3>
      <p className="textMd">
        Siguiente examen: <br/>
        10/12/2023
      </p>
      <p className="textMd">Tema: JS arreglos</p>
      <button className='primary_button'>Cambiar fecha</button>
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

export default GestionarExamenes;