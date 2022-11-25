import React from 'react';
import './style.css'


function UserModificar(){

  return(
    <div className='UserModificar'>
    <p className='title'>Modificar usuario</p>
    <label htmlFor="alias">
      Alias: 
      <input id="alias" type="text" className='input_type2'/>
    </label>
    <label htmlFor="semestre">
      Semestre: 
      <input id="semestre" type="text" className='input_type2'/>
    </label>
    <h3>Informacion ACTI</h3>
    <label htmlFor="ip">
      IP: 
      <input id="ip" type="text" className='input_type2'/>
    </label>
    <label htmlFor="rol">Rol:
      <select id="rol" className="input_type2 rol">
        <option value="estudiante">Estudiante</option>
        <option value="rata">Rata</option>
      </select>
    </label>
    <button className="danger_button">Desactivar usuario</button>
    <div className="buttonsBox">
      <button className="primary_button">Guardar</button>
      <button className="secondary_button">Cancelar</button>
    </div>
    </div>
  )
}

export default UserModificar