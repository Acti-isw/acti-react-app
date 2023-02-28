import React from "react";
import UserService from "../../service/UserService";

function ModalConfirmacion(props){ 

  function Cancelar(){
    props.checkbox(props.info[0]);
    actualizar();
  }
  function actualizar(){
    props.actualizador("")
  }
  async function toggleActivar(e){
    e.preventDefault();
    const data = {
      activo: props.info[1]
    };
    await UserService.updateUser(props.info[0], data)
    actualizar()
  }

  return(
    <div className="modal-conteiner">
      <div className="modal">
      <h3>
        ¿Seguro que quieres {props.info[1]?'rehabilitar':'mandar al anexo'} al usuario {props.info[2]}?
      </h3>
      <div className="buttonsBox">
          <button className="primary_button" onClick={toggleActivar}>
            Aceptar
          </button>
          <button className="secondary_button" onClick={Cancelar}>
            Cancelar
          </button>
      </div>
      </div>
    </div>
  )
}

export default ModalConfirmacion