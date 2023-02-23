import React, {useContext, useState} from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import {recordPractice} from './recordPractice';
import { loggedUser } from '../../UserContext';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import './style.css';

function Reto(props) {
    const navigate = useNavigate();
    const { currentUser, setCurrentUserNewData } = useContext(loggedUser);
    const [done, setDone] = useState(props.reto.done)
    function goToRetoPage() {
        navigate(`/retopage/${props.reto._id}`);
    }

    function doNewRecord(){
      if(!done){
        confetti()
        recordPractice(currentUser, props.reto._id);
        setDone(true)  
        setCurrentUserNewData()
      }
    }

    if (props.reto?.complejidad) {
        return (
            <div className="reto-complejo" onClick={goToRetoPage}>
              {props.done && 
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
