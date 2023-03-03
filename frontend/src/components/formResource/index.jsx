import ResourceService from '../../service/ResourceService';
import FormBuilder from '../formBuilder';

function FormResource({ action, resource, closeModal, load, formTitle }) {
    const resourceData = resource;
    const controls =
        action === 'create' ? ['Agregar'] : ['Agregar', 'Cancelar'];
    function throwAction(event) {
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
        ResourceService.updateResource(resourceData?._id, resource);
        closeModal();
    }
    const formFields = [
        {
            name: 'titulo',
            label:'Titulo',
            inputType: 'text',
            required: true,
            value: resourceData?.titulo
        },
        {
            name: 'enlace',
            label:'Enlace',
            inputType: 'text',
            required: true,
            value: resourceData?.enlace
        },
        {
            name: 'color',
            label:'Color',
            inputType: 'color',
            required: true,
            value: resourceData?.color
        }
    ];
    return (
        <>
            <FormBuilder
                formTitle={formTitle}
                controls={controls}
                inputs={formFields}
                cancelAction={() => {
                    closeModal();
                }}
                submitAction={throwAction}
            />
        </>
    );
}
export default FormResource;
