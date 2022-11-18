import React from 'react';
import logotipo from '../../assets/Logotipo.svg'
import profilePhoto from '../../assets/icon _profile.svg'
import './style.css'

function Nav(){
  return(
        <nav>
          <img src={logotipo} className="logotipo" alt="Logotipo_acti" />
          <div>
              {/* //Lo de desktop */}
              <img src={profilePhoto} alt="Profile_photo" />
          </div>
        </nav>
  )
}

export default Nav