import React from 'react';
import './style.css';
import Horario from '../horario';
import Perfilfoto from '../components_icons/PerfilFoto';
import ModalContraseña from '../modalContraseña';
import { useState } from 'react';

function Perfil() {
    const [OpenModal, setOpenModal] = useState(false);

    function handleOpenModal() {
        setOpenModal(true);
    }
    return (
        <div className="perfil-content content">
            <div className="perfil-main-info">
                {/* <img src={perfilfoto} alt="" className="perfil-foto" /> */}
                <Perfilfoto color={'black'} size={100} />
                <div className="perfil-nombre-correo">
                    <p className="textMd perfil-nombre">
                        Leyen Antonio Mejia Dominguez
                    </p>
                    <p className="textMd perfil-correo">potro@leyen.com</p>
                </div>
            </div>
            <div className="perfil-info perfil-info-general">
                <h3 className="info-title">Informacion general</h3>
                <p className="text general-info-id">ID: 216578</p>
                <p className="text general-info-semestre">Semestre: 7</p>
                <p className="text general-info-tel">
                    Telefono: <br /> 6421101010
                </p>
                <div className="perfil-contraseña">
                    <p className="text general-info-contraseña">
                        Contraseña: <br />
                        ******
                    </p>
                    <button className="btnContraseña" onClick={handleOpenModal}>
                        Cambiar contraseña
                    </button>
                </div>
            </div>
            <div className="perfil-info perfil-info-acti">
                <h3 className="info-title">Informacion ACTI</h3>
                <p className="text info-acti-nivel">Nivel: 0</p>
                <p className="text info-acti-ip">IP:10.21.44.0</p>
                <p className="text info-acti-especialidad">
                    Especialidad: Full-Stack
                </p>
                <p className="text info-acti-rol">Rol: Administrador</p>
                <p className="text info-acti-horario">Horario:</p>
                {/* <Horario/> */}
            </div>
            <div className="datas">
                <div className="data">Retos realizados: 260</div>
                <div className="data">Examenes aprobados: 18/20</div>
            </div>
            <button className="primary_button">Historial de examenes</button>
            <button className="secondary_button">Modificar datos</button>
            {OpenModal && <ModalContraseña setOpenModal={setOpenModal} />}
        </div>
    );
}

export default Perfil;
