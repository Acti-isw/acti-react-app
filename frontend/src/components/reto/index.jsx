import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useNavigate} from 'react-router-dom'
import './style.css'

function Reto(props) {

  const navigate = useNavigate()
  function goToRetoPage(){
    navigate(`/retopage/${props.reto._id}`)
  }

  if(props.reto?.complejidad){
    return (
    <div className="reto" onClick={goToRetoPage}>
      <CheckCircleIcon className='check' fontSize='large'/>
      <img src={props.reto.imagenes[0]} alt="" />
      <p className="title">
      {props.reto.nombre}
      </p>
    </div>
    )

  }
  else{
    return(
      <div className="reto__simple">
      <p className="textMd tituloReto">
        {props.reto.nombre}
      </p>
      <p className="text">
        {props.reto.indicaciones}
      </p>
      <input type="checkbox" />
      </div>
    )
    
  }
}

export default Reto;
