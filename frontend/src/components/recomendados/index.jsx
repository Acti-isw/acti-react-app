import React from "react";
import Desplegable from "../desplegable";
import Recomendacion from "./recomendacion";
import './style.css'

function Recomendados(){
return(
  <div className="content">
    <p className="title">Recomendados</p>
    <Desplegable className="desplegable" titulo={'JS básico'}>
     <Recomendacion/>
    </Desplegable>
  </div>
)

}

export default Recomendados;