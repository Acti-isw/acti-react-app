import React from 'react';
import './style.css';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import ResourceService from '../../service/ResourceService';

function Recurso(props) {
    const { recurso } = props;

    let { enlace } = recurso;
    function redirect() {
        if (!props.editable) {
            window.open(enlace, '_blank');
        }
    }
    function updateResource(){
        props.edit(recurso)
    }
    function deleteRecurso(){
        ResourceService.deleteResource(recurso._id)
        props.load(true)
    }

    return (
        <div
            className= {props.editable? "recursoButton editable":"recursoButton" }
            onClick={redirect}
            style={{ backgroundColor: recurso.color }}
        >
            {recurso.titulo}
            {props.editable && (
                <>
                <EditIcon className="icon icon-edit-resource" onClick={updateResource}/>
                <CloseIcon className="icon icon-delete-resource" onClick={deleteRecurso}/>
                </>
            )}
        </div>
    );
}

export default Recurso;
