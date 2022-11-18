import React from "react";
import './style.css'
import actiLogo from '../../assets/acti.png'

function Login(){
  return(
    <div className="login">
    <img
    className="actilogo"
    alt="logo"
     src={actiLogo}/>
    {/* <form action=""> */}
      <label htmlFor="Input_id">ID:
      
      <input className="input_type1" type="text" id="Input_id" name="input_id" /></label>
      <label htmlFor="input_password">Contraseña:
      <input className="input_type1" id="input_password" type="password" />
      </label>
      <input className="primary_button" type="submit" value="Iniciar sesión"/>
    {/* </form> */}
    
    </div>
  )
}

export default Login