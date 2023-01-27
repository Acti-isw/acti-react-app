import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ResourceService from "../../service/ResourceService";
import Recurso from "../recursos/recurso";
import './style.css'

function AdminRecursos(){

  const [resources, getResources] = useState([]);
  useEffect(()=>{
    ResourceService.getResources()
    .then((res)=>{
      getResources(res)
    })
    .catch((err)=>{
      throw err;
    })
  },[])

  return(
    <div className="adminRecursos content">
      <p className="title">Gestionar recursos</p>
      <div className="addRecurso">
        <h3>Agregar recurso:</h3>
        <form action="" className="formAddRecurso">
          <label htmlFor="">
            Titulo:
            <input type="text" className="input_type1" id="tituloRecurso"/>
          </label>
          <label htmlFor="">
            Enlace:
            <input type="text" className="input_type1" id="enlace"/>
          </label>
          <label htmlFor="">
            Color:
            <input type="color" className="input_type1" id="color"/>
          </label>
          <button className="primary_button">
            Agregar
          </button>
        </form>
      </div>
      <div className="recusosActuales">
        <h2>Recusos actuales</h2>
          {resources.map((recurso)=>(
            <Recurso recurso={recurso} key= {recurso._id} editable={true}/>
          ))}
      </div>
    </div>
  )
}

export default AdminRecursos;