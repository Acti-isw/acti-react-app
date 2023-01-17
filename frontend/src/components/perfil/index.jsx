import React, { useContext } from 'react';
import './style.css';
import Horario from '../horario';
import Perfilfoto from '../components_icons/PerfilFoto';
import ModalContraseña from '../modalContraseña';
import { useState } from 'react';
import { loggedUser } from '../../UserContext';

function Perfil() {
    const [OpenModal, setOpenModal] = useState(false);
    const { currentUser } = useContext(loggedUser);

    function handleOpenModal() {
        setOpenModal(true);
    }

    return (
        <div className="perfil-content content">
            <div className="perfil-main-info">
                {/* <img src={perfilfoto} alt="" className="perfil-foto" /> */}
                <Perfilfoto color={'black'} size={100} />
                <div className="perfil-nombre-correo">
                    <p className="textMd perfil-nombre">{currentUser.nombre}</p>
                    <p className="perfil-correo">{currentUser.correo}</p>
                </div>
            </div>
            <div className="perfil-info perfil-info-general">
                <h3 className="info-title">Informacion general</h3>
                <p className="text general-info-id">ID: {currentUser.id}</p>
                <p className="text general-info-semestre">
                    Semestre: {currentUser.semestre}
                </p>
                <p className="text general-info-tel">
                    Telefono: <br /> {currentUser.telefono}
                </p>
                <div className="perfil-contraseña">
                    /**Make dynamic this field in function of password lenght */
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
                <p className="text info-acti-nivel">
                    Nivel: {currentUser.infoActi.Nivel}
                </p>
                <p className="text info-acti-ip">
                    IP:{currentUser.infoActi.IP}
                </p>
                <p className="text info-acti-especialidad">
                    Especialidad: {currentUser.infoActi.Especialidad}
                </p>
                <p className="text info-acti-rol">
                    Rol: {currentUser.rol.nombre}
                </p>
                <p className="text info-acti-horario">Horario:</p>
                <Horario
                    className="horario"
                    Datahorario={JSON.parse(currentUser.infoActi.Horario)}
                    setDatahorario={null}
                    mode={0}
                />
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
