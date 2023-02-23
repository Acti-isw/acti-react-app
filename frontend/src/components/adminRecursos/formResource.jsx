import { useState } from 'react';
import ResourceService from '../../service/ResourceService';

function FormResource({ action, resource, closeModal, load }) {
    const [resourceData, getResourceData] = useState(resource);
    // console.log(resource);

    function throwAction(event) {
        event.preventDefault();
        const data = {
            titulo: event.target.titulo.value,
            enlace: event.target.enlace.value,
            color: event.target.color.value
        };
        if (action === 'create') {
            createResource(data);
        } else if (action === 'update') {
            updateResource(data);
        }
        event.target.reset();
        load(true);
    }

    function createResource(resource) {
        ResourceService.createResource(resource);
    }
    function updateResource(resource) {
      ResourceService.updateResource(resourceData?._id, resource)
      closeModal()
    }
    return (
        <>
            <form action="" className="formAddRecurso" onSubmit={throwAction}>
                <label htmlFor="">
                    Titulo:
                    <input
                        defaultValue={resourceData?.titulo}
                        type="text"
                        className="input_type1"
                        name="titulo"
                        id="tituloRecurso"
                    />
                </label>
                <label htmlFor="">
                    Enlace:
                    <input
                        defaultValue={resourceData?.enlace}
                        type="text"
                        className="input_type1"
                        id="enlace"
                        name="enlace"
                    />
                </label>
                <label htmlFor="">
                    Color:
                    <input
                        defaultValue={resourceData?.color}
                        type="color"
                        className="input_type1"
                        id="color"
                        name="color"
                    />
                </label>
                <div className="controlsConteiner">
                    <button className="primary_button">Agregar</button>
                    {action === 'update' && (
                        <button
                            className="secondary_button"
                            onClick={()=>{closeModal()}}
                        >
                            Cancelar
                        </button>
                    )}
                </div>
            </form>
        </>
    );
}

export default FormResource;
