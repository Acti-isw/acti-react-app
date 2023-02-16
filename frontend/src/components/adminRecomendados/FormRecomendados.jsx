function FormRecomendados() {

  function action(e) {
    e.preventDefault();
}
    return (
        <>
            <form
                action=""
                className="addrecomendacion__form"
                onSubmit={action}
            >
                <label htmlFor="enlace">
                    Enlace:
                    <input
                        type="text"
                        className="input_type1"
                        id="enlace"
                        name="enlace"
                    />
                </label>
                <fieldset id="tipo" className="addrecomendacion__form__tipo">
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
                            className="addrecomendacion__form__tipo__radio"
                        />
                    </div>
                </fieldset>
                <label htmlFor="">
                    Temas
                    {/* Mismo caso del input anterior */}
                    <input type="text" className="input_type1" name="tema" />
                </label>
                <label
                    htmlFor="color"
                    className="addrecomendacion__form__color"
                >
                    Color:
                    <input type="color" className="input_type1" id="color" />
                </label>
                <button className="primary_button" type="submit">
                    Agregar
                </button>
            </form>
        </>
    );
}

export default FormRecomendados;
