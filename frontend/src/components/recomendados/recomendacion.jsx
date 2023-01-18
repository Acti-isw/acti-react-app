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
        <h4>www.w3schools.com</h4>
      </div>
      <h3 className="recomendacion__temas">Temas:</h3>
      <ul className="text recomendacion__temas">
        <li>Ciclos</li>
        <li>Variables</li>
        <li>Condicionales</li>
      </ul>
      <p className="textoMd fuenteText">Fuente:SoyDalto</p>
    </div>
    </div>
  )

}

export default Recomendacion;