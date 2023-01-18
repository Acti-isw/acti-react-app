import React from "react";
import Recomendacion from "../recomendados/recomendacion";
import './style.css'

function AdminRecomendados(){

  return(
    <div className="content adminRecomendados">
    <p className="title">Gestionar recomendados</p>
    <div className="addrecomendacion">
      <h3>Agregar recomendacion</h3>
      <label htmlFor="enlace">
        Enlace:
        <input type="text" id="enlace"/>
      </label>
      <label htmlFor="">
        Tipo:
        {/* Este input es de otro tipo pero no me acuerdo de cual */}
        <input type="text" />
      </label>
      <label htmlFor="">
        Temas
        {/* Mismo caso del input anterior */}
        <input type="text" />
      </label>
      <label htmlFor="color">
        Color:
        <input type="color" id="color"/>
      </label>
      <button className="primary_button">
        Agregar
      </button>
    </div>
    <div className="recomendadosList">
    <h2>Recomendados actuales</h2>
      <Recomendacion editable={true}/>
    </div>

    </div>
  )
}

export default AdminRecomendados;