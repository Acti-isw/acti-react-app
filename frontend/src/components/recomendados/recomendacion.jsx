import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Recomendacion(props){

  return(
    <div className="recomendacion-conteiner">
      {props.editable && 
      <div className="controles-conteiner">
        <div className="controles">
        <EditIcon className="icon"/>
        <DeleteIcon className="icon"/>
        </div>
      </div>
      }
    <div className={props.editable?"recomendacion editable":"recomendacion"}>
      <div className="recomendacion__enlace">
        <h4>{props.recomendacion.enlace}</h4>
      </div>
      <h3 className="recomendacion__temas">{props.recomendacion.titulo}</h3>
    </div>
    </div>
  )

}

export default Recomendacion;