import { useEffect, useState } from 'react';
import TemaService from '../../service/TemaService';
import RecommendedService from '../../service/RecommendedService';
// import Select from "react-select"
import FormBuilder from '../../components/formBuilder';

function FormRecomendado(props) {
    function action(e) {
        e.preventDefault();
    }
    // console.log(props.recomendacion);
    function closeModal() {
        props.recomendacionModal(false);
    }
    const [temas, setTemas] = useState([]);
    const [selectTema, setSelectTema] = useState();
    // const [tipo, setTipo] = useState();

    useEffect(() => {
        // setTipo(props?.recomendacion?.tipo);
        TemaService.getTopics().then((res) => {
            // setTemas(res);
            // const options = [];
            // res.map((opt) => {
            //     // if (opt.id === props?.recomendacion?.tema) {
            //     //     setSelectTema({
            //     //         id: opt.id,
            //     //         name: opt.nombre
            //     //     });
            //     // }
            //     options.push({
            //         id: opt.id,
            //         name: opt.nombre
            //     });
            // });
            setTemas(res);
        })
    }, []);

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
            value: props?.recomendacion?.tema,
            // options: [
            //     { name: 'Fundamentos de JS', id: 0 },
            //     { name: 'documentacion', id: 1 },
            //     { name: 'servicio', id: 2 },
            //     { name: 'tutorial', id: 3 },
            //     { name: 'tutoriales', id: 4 },
            //     { name: 'tutorial¿¿', id: 5 }
            // ],

            // name: 'tema',
            // label: 'Tema',
            // inputType: 'select',
            // required: true,
            // // value: props.recomendacion?.tema
            // //     ? props.recomendacion.tema
            // //     : undefined,
            // options: temas.map((tema)=>{
            //     return {name: tema.label, id: tema.value}
            // })
        }
    ];
    const controls =
        props.action === 'create' ? ['Agregar'] : ['Agregar', 'Cancelar'];

    return (
        <>
            <FormBuilder
                inputs={formRecommends}
                controls={controls}
                cancelAction={closeModal}
                submitAction={action}
                formTitle={'Agregar recomendado'}
            />
            {/* <form
                action=""
                className="addrecomendacion__form"
                onSubmit={action}
            > */}
            {/* 
                <fieldset className="addrecomendacion__form__tipo">
                    <legend className="addrecomendacion__form__tipo__legend textMd">
                        Tipo:
                    </legend>
                    <div className="addrecomendacion__form__tipo__label__radioConteiner">
                        <label
                            htmlFor="video"
                            className="addrecomendacion__form__tipo__label"
                        >
                            Video
                        </label>
                        <input
                            className="addrecomendacion__form__tipo__radio"
                            type="radio"
                            id="video"
                            name="tipo"
                            value={true}
                            checked={tipo===true}
                            onChange={handleTipoChange}
                            required
                        />
                    </div>
                    <div className="addrecomendacion__form__tipo__label__radioConteiner">
                        <label
                            htmlFor="documentacion"
                            className="addrecomendacion__form__tipo__label"
                        >
                            Documentacion
                        </label>
                        <input
                            type="radio"
                            id="documentacion"
                            name="tipo"
                            checked={tipo===false}
                            onChange={handleTipoChange}
                            value={false}
                            required
                            className="addrecomendacion__form__tipo__radio"
                        />
                    </div>
                </fieldset>
                <label htmlFor="">
                    Tema|
                        <Select
                            maxMenuHeight={150}
                            required
                            id="tema"
                            name='tema'
                            value={selectTema}
                            onChange={handleTemaChange}
                            options={temas}
                        />
                </label>
                <label
                    htmlFor="color"
                    className="addrecomendacion__form__color"
                >
                    Enlace:
                    <input
                        type="text"
                        className="input_type1"
                        id="enlace"
                        name="enlace"
                        defaultValue={props.recomendacion?.enlace}
                        required
                    />
                </label>
                <div className="addrecomendacion__buttons">
                    <button className="primary_button" type="submit">
                        Agregar
                    </button>
                    {props.action === 'edit' && (
                        <button
                            className="secondary_button"
                            type="button"
                            onClick={closeModal}
                        >
                            Cancelar
                        </button>
                    )}
                </div> */}
            {/* </form> */}
        </>
    );
}

export default FormRecomendado;
