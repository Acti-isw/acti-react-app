import React from "react";

function Recomendacion(props){

  if(props.tipo){
    return(
    <>
    </>
    )
  }
  return(
    <div className="recomendacion">
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
  )

}

export default Recomendacion;