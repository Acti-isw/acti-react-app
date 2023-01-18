import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';

function Aviso(props) {
    const { color } = props;
    const backgroundColor = {
        backgroundColor: color
    };
    return (
        <>
            <div className="aviso" style={backgroundColor}>
                <div className="infoAviso">
                    <p>{props.text}</p>
                    <p>{props.tema}</p>
                </div>
                {props.editable && <CloseIcon className="icon" />}
            </div>
        </>
    );
}

export default Aviso;
