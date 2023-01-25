import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ResourceService from "../../service/ResourceService";
import './style.css'

function Recursos(){
  const [recursos, setRecursos] = useState([])

  useEffect(()=>{
    ResourceService.getResources()
    .then((res)=>{
      setRecursos(res)
    })
    .catch((err)=>{
      throw err
    })
  },[])
return(
  <div className="content recursos">
    <p className="title">Recursos</p>
    <div className="recursosList">
      {recursos.map((recurso)=>(
        <a className="recursoBtn" href={recurso.enlace} key={recurso._id} target={'_blank'}>
        <button style={{backgroundColor:recurso.color}}>
          {recurso.titulo}
        </button>
        </a>
      ))}
      {/* <button style={{backgroundColor:'#000'}}>
          RecursosNombre
      </button> */}
    </div>
  </div>
)

}

export default Recursos;