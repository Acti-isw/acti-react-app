import React from 'react';
import logotipo from '../../assets/Logotipo.svg'
import profilePhoto from '../../assets/icon _profile.svg'
import './style.css'
import { useState } from 'react';

function Nav(){
  const [Options, setOptions]= useState(false) 
  return(
        <div>
          <nav>
            <img src={logotipo} className="logotipo" alt="Logotipo_acti" />
            <div>
                {/* //Lo de desktop */}
                <img src={profilePhoto} alt="Profile_photo" />
            </div>
          </nav>
          <div className="options">
            <ul className='options__ul'>
              <li className='options__ul__li textMd' >Perfil</li>
              <hr />
              <li className='options__ul__li textMd' >Administrar</li>
              <hr />
              <li className='options__ul__li textMd' >Cerrar sesión</li>
            </ul>
          </div>
        </div>
  )
}

export default Nav