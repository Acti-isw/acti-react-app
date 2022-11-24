import React from "react";
import './style.css'

function CrearUsuario (){
  return(
    <div className="crearUsuario">
    <p className="title">Crear nuevo usuario</p>
    <label htmlFor="nombre">Nombre:
      <input id="nombre" type="text" className="input_type1 input_addUser" />
    </label>
    <label htmlFor="id">ID:
      <input id="id" type="number" className="input_type1 input_addUser" />
    </label>
    <label htmlFor="alias">Alias:
      <input id="alais" type="text" className="input_type1 input_addUser" />
    </label>
    <label htmlFor="contraseña">Contraseña predetermianda:
      <input id="contraseña" type="password" className="input_type1 input_addUser" />
    </label>
    <label htmlFor="email">Correo:
      <input id="email" type="email" className="input_type1 input_addUser" />
    </label>
    <h3>Informacion ACTI</h3>
    <label htmlFor="ip">IP:
      <input id="ip" type="text" className="input_type1 input_addUser" />
    </label>
    <label htmlFor="rol">Rol:
      <select id="rol" className="input_type1 input_addUser">
        <option value="estudiante">Estudiante</option>
        <option value="rata">Rata</option>
      </select>
    </label>
    <div className="buttonsBox">
      <button className="primary_button">Guardar</button>
      <button className="secondary_button">Cancelar</button>
    </div>
    </div>
  )
}

export default CrearUsuario;