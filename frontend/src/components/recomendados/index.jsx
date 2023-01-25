import React, { useEffect } from "react";
import { useState } from "react";
import RecommendedService from "../../service/RecommendedService";
import TemaService from "../../service/TemaService";
import Desplegable from "../desplegable";
import Recomendacion from "./recomendacion";
import './style.css'

function Recomendados(){
  const [recomendados, setRecomendados] = useState([])
  const [temas, setTemas] = useState([])
  useEffect(()=>{
    TemaService.getTopics()
    .then((res)=>{
      setTemas(res)
    })
    .catch((err)=>{
      throw err
    })
    RecommendedService.getRecommended()
    .then((res)=>{
      console.log(res)
      setRecomendados(res)
    })
    .catch((err)=>{
      throw err
    })

  },[])
return(
  <div className="content">
    <p className="title">Recomendados</p>
      {temas.map((tema)=>(
        <Desplegable className="desplegable" titulo={tema.nombre}>
          {/* {recomendados.filter(recomendacion)=>recomendacion.} */}
        </Desplegable>
      ))}
    <Desplegable className="desplegable" titulo={'JS básico'}>
     <Recomendacion/>
    </Desplegable>
  </div>
)

}

export default Recomendados;