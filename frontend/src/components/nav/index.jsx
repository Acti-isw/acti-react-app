import React, { useContext } from 'react';
import logotipo from '../../assets/Logotipo.svg';
import profilePhoto from '../../assets/iconprofile.svg';
import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loggedUser } from '../../UserContext';

function Nav() {
    const [Options, setOptions] = useState(false);
    const { logout } = useContext(loggedUser);
    function toggleOptions() {
        setOptions(!Options);
    }
    function CerrarSesion() {
        logout();
    }
    return (
        // <Router>
        <div>
            <nav>
                <Link to="/">
                    <img
                        src={logotipo}
                        className="logotipo"
                        alt="Logotipo_acti"
                    />
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
            <div className={Options ? 'options' : 'none'}>
                <ul className="options__ul">
                    <li
                        className="options__ul__li textMd"
                        onClick={toggleOptions}
                    >
                        <Link to="/perfil">Perfil</Link>
                    </li>
                    <hr />
                    <li
                        className="options__ul__li textMd"
                        onClick={toggleOptions}
                    >
                        <Link to="/admin">Administrar</Link>
                    </li>
                    <hr />
                    <li
                        className="options__ul__li textMd"
                        onClick={CerrarSesion}
                    >
                        Cerrar sesión
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
