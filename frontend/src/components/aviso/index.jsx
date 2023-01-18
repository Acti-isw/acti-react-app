import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';

function Aviso(props) {
    const { color } = props;
    const backgroundColor = {
        backgroundColor: color
    };
    if(props.admin){
        return(
            <div className="aviso" style={backgroundColor}>
                <div className='infoAviso'>
                <p>{props.text}</p>
                <p>{props.tema}</p>
                </div>
                <CloseIcon className='icon'/>
            </div>
        )
    }
    else{
        return (
            <>
            <div className="aviso" style={backgroundColor}>
            <div className='infoAviso'>
                <p>{props.text}</p>
                <p>{props.tema}</p>
                </div>
            </div>
            </>
        );
    }
}

export default Aviso;
