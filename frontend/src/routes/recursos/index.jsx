import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ResourceService from "../../service/ResourceService";
import Recurso from "./recurso";
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
        <Recurso recurso={recurso} key={recurso._id} editable={false}/>
      ))}
    </div>
  </div>
)

}

export default Recursos;