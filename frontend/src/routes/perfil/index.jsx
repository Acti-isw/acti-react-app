import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Horario from '../../components/horario';
import Perfilfoto from '../../components/components_icons/PerfilFoto';
import ModalContraseña from '../../components/modalContraseña';
import { loggedUser } from '../../UserContext';
import password from '../../utils/passcode';

function Perfil() {
    const [OpenModal, setOpenModal] = useState(false);
    const { currentUser, setCurrentUserNewData } = useContext(loggedUser);
    // const [passcode, setPasscode] = useState(currentUser.contraseña);

    function handleOpenModal() {
        setOpenModal(true);
    }

    useEffect(() => {
        setCurrentUserNewData();
    }, [OpenModal]);

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
                    <p className="text general-info-contraseña">
                        Contraseña: <br />
                        {password(currentUser.contraseña)}
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
            </div>
            <div className="perfil-horario">
                <h3 className="info-title">Horario:</h3>
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
            <div className="perfil-modifyButtons">
                <Link to={'/historial-examenes'}>
                    <button className="primary_button">
                        Historial de examenes
                    </button>
                </Link>
                <Link to={`/usermodify/${currentUser.id}`}>
                    <button className="secondary_button">
                        Modificar datos
                    </button>
                </Link>
            </div>
            {OpenModal && (
                <ModalContraseña
                    setOpenModal={setOpenModal}
                    id={currentUser.id}
                    password={currentUser.contraseña}
                />
            )}
        </div>
    );
}

export default Perfil;
