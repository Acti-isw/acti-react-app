import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';
import AvisoService from '../../service/AvisoService';
import { Link } from 'react-router-dom';

function Aviso(props) {
    const { color } = props;
    const backgroundColor = {
        backgroundColor: color
    };

    function deleteAviso() {
        AvisoService.DeleteAnnonucement(props.id)
        props.actualizador(true)
    }

    return (
        <>
            <div className={`aviso ${props.className}`} style={backgroundColor}>
                <div className="infoAviso">
                    <p>{props.text}</p>
                    <p>{props.tema}</p>
                    {props.examen &&
                    <Link to={props.examen}>
                        Click aqui para presentar el examen
                    </Link>
                    }
                </div>
                {props.editable && <CloseIcon className="icon" onClick={deleteAviso} />}
            </div>
        </>
    );
}

export default Aviso;
