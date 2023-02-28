import React, { useEffect } from "react";
import { useState } from "react";
import RecommendedService from "../../service/RecommendedService";
import TemaService from "../../service/TemaService";
import Desplegable from "../../components/desplegable";
import Recomendacion from "../../components/recomendacion";
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
        <Desplegable className="desplegable" titulo={tema.nombre} key={tema.id}>
          {recomendados.filter((recomendacion) => recomendacion.tema == tema.id).map(
            (recomend)=>(
              <Recomendacion recomendacion={recomend} key={recomend._id}/>
            ) 
          )}
        </Desplegable>
      ))}
  </div>
)

}

export default Recomendados;