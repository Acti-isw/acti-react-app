import React from "react";
import UserService from "../../service/UserService";

function ModalConfirmacion(props){ 

  function actualizar(){
    props.actualizador("")
  }
  async function toggleActivar(e){
    e.preventDefault();
    const data = {
      activo: props.info[1]==='activar'?true:false
    };
    console.log(data)
    console.log(props.info[0])
    await UserService.updateUser(props.info[0], data)
    actualizar()
  }

  return(
    <div className="modal-conteiner">
      <div className="modal">
      <h3>
        ¿Seguro que quieres {props.info[1]} al usuario {props.info[2]}?
      </h3>
      <div className="buttonsBox">
          <button className="primary_button" onClick={toggleActivar}>
            Aceptar
          </button>
          <button className="secondary_button" onClick={actualizar}>
            Cancelar
          </button>
      </div>
      </div>
    </div>
  )
}

export default ModalConfirmacion