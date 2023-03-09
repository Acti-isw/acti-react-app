import React, {useContext, useState} from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import {recordPractice} from './recordPractice';
import { loggedUser } from '../../UserContext';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import fireworks from '../../utils/fireworks'
import './style.css';

function Reto(props) {
    // console.log(props.reto.nombre, props.reto.done);
    const navigate = useNavigate();
    const { currentUser, setCurrentUserNewData } = useContext(loggedUser);
    const [done, setDone] = useState(props.reto.done)
    function goToRetoPage() {
        navigate(`/retopage/${props.reto._id}`);
    }
    // console.log(props.reto.nombre);

    function doNewRecord(){
      if(!done){
        // confetti()
        fireworks()
        fireworks()
        fireworks()
        recordPractice(currentUser, props.reto._id, setCurrentUserNewData);
        setDone(true)  
      }
    }

    if (props.reto?.complejidad) {
        return (
            <div className="reto-complejo" onClick={goToRetoPage}>
              {done && 
                <CheckCircleIcon className="check" fontSize="large" />
              }
                <img src={props.reto.imagenes[0]} alt="" />
                <p className="title">{props.reto.nombre}</p>
            </div>
        );
    } else {
        return (
            <div className="reto__simple">
                <p className="textMd tituloReto">{props.reto.nombre}</p>
                <p className="text">{props.reto.indicaciones}</p>
                <input
                    type="checkbox"
                    onChange={doNewRecord}
                    checked={done}
                    disabled ={done}
                />
            </div>
        );
    }
}

export default Reto;
