import ResourceService from '../../service/ResourceService';
import FormBuilder from '../../components/formBuilder';

function FormResource({ action, resource, closeModal, load, formTitle }) {
    const resourceData = resource;
    const controls = action==='create'?['Agregar']:['Agregar', 'Cancelar'];
    function throwAction(event) {
        event.preventDefault();
        const data = {
            titulo: event.target.Titulo.value,
            enlace: event.target.Enlace.value,
            color: event.target.Color.value
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
            name: 'Titulo',
            inputType: 'text',
            required: true, 
            value: resourceData?.titulo
        },
        {
            name: 'Enlace',
            inputType: 'text',
            required: true,
            value: resourceData?.enlace
        },
        {
            name: 'Color',
            inputType: 'color',
            required: true,
            value: resourceData?.color
        }
    ];
    return (
        <>
            {/* <form action="" className="formAddRecurso" onSubmit={throwAction}>
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
            </form> */}
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
