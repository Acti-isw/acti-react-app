import React, { useContext } from 'react';
import logotipo from '../../assets/Logotipo.svg';
import profilePhoto from '../../assets/iconprofile.svg';
import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { loggedUser } from '../../UserContext';
import Perfilfoto from '../components_icons/PerfilFoto';

function Nav() {
    const [Options, setOptions] = useState(false);
    const { logout, currentUser } = useContext(loggedUser);
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
                <div className="nav--right">
                    {/* //Lo de desktop */}
                    <div className="nav--navigationbuttons">
                        <Link to="/">Inicio</Link>
                        <Link to="/recomendados">Recomendaciones</Link>
                        <Link to="/recursos">Recursos</Link>
                    </div>
                    {/* <Perfilfoto  */}
                    <div 
                        className='Profile_photo'
                        onClick={toggleOptions}
                    >
                    <Perfilfoto
                        nivel={currentUser.infoActi.Nivel}
                        size={'small'}
                        privilegio={currentUser.rol.id == 1}
                        />
                        </div>
                    {/* <img
                        src={profilePhoto}
                        
                    /> */}
                </div>
            </nav>
            {Options && (
                <div
                    className="options__conteiner"
                    onClick={() => {
                        setOptions(false);
                    }}
                >
                    <div className="options">
                        <ul className="options__ul">
                            <Link to="/perfil">
                                <li
                                    className="options__ul__li textMd"
                                    onClick={toggleOptions}
                                >
                                    Perfil
                                </li>
                            </Link>
                            <hr />
                            {currentUser.rol.id === 1 && (
                                // <p>admin</p>
                                <>
                                    <Link to="/admin">
                                        <li
                                            className="options__ul__li textMd"
                                            onClick={toggleOptions}
                                        >
                                            Administrar
                                        </li>
                                    </Link>
                                    <hr />
                                </>
                            )}
                            <li
                                className="options__ul__li textMd"
                                onClick={CerrarSesion}
                            >
                                Cerrar sesión
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;
