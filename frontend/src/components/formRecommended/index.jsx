import { useEffect, useState } from 'react';
import TemaService from '../../service/TemaService';
import RecommendedService from '../../service/RecommendedService';
import FormBuilder from '../formBuilder';
import Loader from '../loader';

function FormRecomendado(props) {
    function action(e) {
        e.preventDefault();
    }
    function closeModal() {
        props.recomendacionModal(false);
    }
    const [temas, setTemas] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        TemaService.getTopics().then((res) => {
            setTemas(res);
        });
    }, []);
    useEffect(() => {
        if (temas.length > 0) {
            setLoader(false);
        }
    }, [temas]);

    function action(e) {
        e.preventDefault();
        const recomendacion = {
            titulo: e.target.titulo.value,
            enlace: e.target.enlace.value,
            tema: e.target.tema.value,
            tipo: e.target.tipo.value
        };
        if (props.action === 'create') {
            addRecommended(recomendacion);
        } else {
            editRecommeded(props.recomendacion._id, recomendacion);
            closeModal();
        }
        e.target.reset();
        props.load(true);
    }

    function editRecommeded(id, recomendacion) {
        RecommendedService.updateRecommended(id, recomendacion);
    }

    function addRecommended(recomendacion) {
        RecommendedService.createRecommended(recomendacion);
    }

    const formRecommends = [
        {
            name: 'titulo',
            inputType: 'text',
            label: 'Titulo',
            required: true,
            value: props.recomendacion?.titulo ? props.recomendacion.titulo : ''
        },
        {
            name: 'tipo',
            label: 'Tipo:',
            inputType: 'radio',
            required: true,
            value:
                props.recomendacion?.tipo != undefined
                    ? props.recomendacion.tipo
                    : undefined,
            options: [
                { name: 'documentacion', id: 0 },
                { name: 'video', id: 1 }
            ]
        },
        {
            inputType: 'select',
            name: 'tema',
            label: 'Tema',
            required: true,
            options: temas,
            value: props?.recomendacion?.tema
        },
        {
            name: 'enlace',
            label: 'Enlace',
            inputType: 'text',
            required: true,
            value: props.recomendacion?.enlace
        }
    ];
    const controls =
        props.action === 'create' 
        ? ['Agregar'] 
        : ['Agregar', 'Cancelar'];
        
    const formTitle =
        props.action === 'create'
            ? 'Agregar recomendado'
            : 'Editar recomendado';

    if (loader) {
        return <Loader />;
    } else {
        return (
            <>
                <FormBuilder
                    inputs={formRecommends}
                    controls={controls}
                    cancelAction={closeModal}
                    submitAction={action}
                    formTitle={formTitle}
                />
            </>
        );
    }
}
export default FormRecomendado;
