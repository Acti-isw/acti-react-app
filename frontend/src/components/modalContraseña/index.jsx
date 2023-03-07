import { useState } from 'react';
import ReactDOM from 'react-dom';
import UserService from '../../service/UserService';
// import { loggedUser } from '../../UserContext';
import './style.css';

function ModalContraseña({ setOpenModal, id, password }) {
    const cancel = () => {
        setOpenModal(false);
    };
    const [error, setError] = useState(0);
    const saveNewPassword = async (e) => {
        e.preventDefault();
        const passwords = e.target;
        if (passwords.contraseñaActual.value === password) {
            if (
                passwords.contraseñaNueva.value ===
                passwords.contraseñaConfirmar.value
            ) {
                setError(0);
                const data = {
                    contraseña: passwords.contraseñaNueva.value
                }
                await UserService.updateUser(id, data)
                setOpenModal(false)
            } else {
                setError(2);
            }
        } else {
            setError(1);
        }
    };

    return ReactDOM.createPortal(
        <div className="modal-conteiner">
            <form className="modalContraseña" onSubmit={saveNewPassword}>
                <label htmlFor="">
                    Contraseña actual:
                    <input
                        required
                        name="contraseñaActual"
                        type="password"
                        className="input_type1 input_addUser"
                        placeholder=""
                    />
                    <span className="span__error">
                        {error === 1 && '*La contraseña actual no coincide*'}
                    </span>
                </label>
                <label htmlFor="">
                    Nueva contraseña:
                    <input
                        required
                        name="contraseñaNueva"
                        type="password"
                        className="input_type1 input_addUser"
                        placeholder=""
                    />
                    <span className="span__error"></span>
                </label>
                <label htmlFor="">
                    Confirmar contraseña:
                    <input
                        required
                        name="contraseñaConfirmar"
                        type="password"
                        className="input_type1 input_addUser"
                        placeholder=""
                    />
                    <span className="span__error">
                        {error == 2 && '*Las contraseñas no coinciden*'}
                    </span>
                </label>
                <div className="buttonsBox">
                    <input
                        id="submit"
                        type="submit"
                        className="primary_button"
                        value={'Guardar'}
                    />
                    <button className="secondary_button" onClick={cancel}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>,

        document.getElementById('cambiarContraseña')
    );
}

export default ModalContraseña;
