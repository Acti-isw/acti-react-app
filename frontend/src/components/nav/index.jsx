import React from 'react';
import logotipo from '../../assets/Logotipo.svg'
import profilePhoto from '../../assets/icon _profile.svg'
import './style.css'
import { useState } from 'react';
import {
  Link,
} from "react-router-dom";


function Nav(){
  const [Options, setOptions]= useState(false) 
  function toggleOptions(){
    setOptions(!Options)
  }
  return(
    // <Router>
        <div>
          <nav>
            <Link to='/'>
              <img src={logotipo} className="logotipo" alt="Logotipo_acti" />
            </Link>
            <div>
                {/* //Lo de desktop */}
                <img
                src={profilePhoto} 
                alt="Profile_photo"
                onClick={toggleOptions}
                />
            </div>
          </nav>
          <div className={Options?"options":"none"}>
            <ul className='options__ul'>
              <li 
                className='options__ul__li textMd' 
                onClick={toggleOptions}
              >Perfil</li>
              <hr />
              <li 
                className='options__ul__li textMd' 
                onClick={toggleOptions}
                >
                  <Link to='/admin'>Administrar</Link></li>
              <hr />
              <li 
                className='options__ul__li textMd' 
                onClick={toggleOptions}
              >
                Cerrar sesión</li>
            </ul>
          </div>
        </div>
          
          
  )
}

export default Nav