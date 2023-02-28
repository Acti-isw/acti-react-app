import { useEffect, useState } from 'react';
import TemaService from '../../service/TemaService';
import RecommendedService from '../../service/RecommendedService';
import Select from "react-select"

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
    const [tipo, setTipo]=useState()

    useEffect(() => {
        setTipo(props?.recomendacion?.tipo)
        TemaService.getTopics().then((res) => {
            // setTemas(res);
            const options = [];
            res.map((opt)=>{
                if(opt.id===props?.recomendacion?.tema){
                    setSelectTema({
                        value:opt.id,
                        label: opt.nombre
                    })
                }
                options.push({
                    value:opt.id,
                    label: opt.nombre
                })
            })
            setTemas(options)
        })
    }, []);

    function handleTemaChange(event) {
        // e.preventDefault();
        setSelectTema(event);
    }
    function handleTipoChange(event) {
        // e.preventDefault();
        setTipo(!tipo);
    }

    function action(e) {
        e.preventDefault();
        const recomendacion = {
            titulo: e.target.titulo.value,
            enlace: e.target.enlace.value,
            tema: e.target.tema.value,
            tipo: e.target.tipo.value
        };
        if(props.action == 'add'){
            addRecommended(recomendacion);
        }else{
            editRecommeded(props.recomendacion._id, recomendacion)
            closeModal();
        }
        e.target.reset();
        props.load(true)
    }

    function editRecommeded(id, recomendacion){
        RecommendedService.updateRecommended(id, recomendacion)
    }

    function addRecommended(recomendacion) {
        RecommendedService.createRecommended(recomendacion);
    }

    return (
        <>
            <form
                action=""
                className="addrecomendacion__form"
                onSubmit={action}
            >
                <label htmlFor="titulo">
                    titulo:
                    <input
                        type="text"
                        className="input_type1"
                        id="titulo"
                        name="titulo"
                        required
                        defaultValue={
                            props.recomendacion?.titulo
                                ? props.recomendacion.titulo
                                : ''
                        }
                    />
                </label>
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
                            // defaultValue={props.recomendacion?.tipo!=undefined?props.recomendacion.tipo:undefined}
                        />
                    </div>
                </fieldset>
                <label htmlFor="">
                    Tema
                    {/* <div className="wrapper"> */}
                        <Select
                            maxMenuHeight={150}
                            required
                            id="tema"
                            name='tema'
                            // className="input_type2"
                            value={selectTema}
                            onChange={handleTemaChange}
                            options={temas}
                        />
                            {/* {temas.map((tema) => (
                                <option value={tema.id} key={tema.id}>
                                    {tema.nombre}
                                </option>
                            ))}
                        </Select> */}
                    {/* </div> */}
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
                </div>
            </form>
        </>
    );
}

export default FormRecomendado;