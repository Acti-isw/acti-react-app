import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';
import AvisoService from '../../service/AvisoService';

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
            <div className="aviso" style={backgroundColor}>
                <div className="infoAviso">
                    <p>{props.text}</p>
                    <p>{props.tema}</p>
                </div>
                {props.editable && <CloseIcon className="icon" onClick={deleteAviso} />}
            </div>
        </>
    );
}

export default Aviso;
