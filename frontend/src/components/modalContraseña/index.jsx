import ReactDOM from 'react-dom';
import './style.css'

function ModalContraseña({setOpenModal}) {
  const cancel = ()=>{
    setOpenModal(false)
  }
  const saveNewPassword = ()=>{

  }
    return ReactDOM.createPortal(
        <div className="modal-conteiner">
            <div className="modalContraseña">
                <p className="textMd">Contraseña actual:</p>
                <input
                    required
                    name="contraseña"
                    type="password"
                    className="input_type1 input_addUser"
                    placeholder=""
                />
                <p className="textMd">Nueva contraseña:</p>
                <input
                    required
                    name="contraseña"
                    type="password"
                    className="input_type1 input_addUser"
                    placeholder=""
                />
                <p className="textMd">Confirmar contraseña:</p>
                <input
                    required
                    name="contraseña"
                    type="password"
                    className="input_type1 input_addUser"
                    placeholder=""
                />
                <div className="buttonsBox">
                    <input
                        id="submit"
                        type="submit"
                        className="primary_button"
                        // onClick={submit}
                        value={'Guardar'}
                    />
                    <button className="secondary_button" onClick={cancel}>Cancelar</button>
                </div>
            </div>
        </div>,

        document.getElementById('cambiarContraseña')
    );
}

export default ModalContraseña;
