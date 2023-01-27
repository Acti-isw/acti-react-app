import React from 'react';
import './style.css';
import CloseIcon from '@mui/icons-material/Close';
import ResourceService from '../../service/ResourceService';

function Recurso(props) {
    const { recurso } = props;

    let { enlace } = recurso;
    function redirect() {
        if (!props.editable) {
            window.open(enlace, '_blank');
        }
    }
    function deleteRecurso(){
        console.log(recurso._id)
        ResourceService.deleteResource(recurso._id)
    }

    return (
        <div
            className="recursoButton"
            onClick={redirect}
            style={{ backgroundColor: recurso.color }}
        >
            {recurso.titulo}
            {props.editable && (
                <CloseIcon className="icon icon-delete-resource" onClick={deleteRecurso}/>
            )}
        </div>
    );
}

export default Recurso;
