import { useEffect, useState } from 'react';

function RadioInput({ input }) {
    const [tipo, setTipo] = useState();
    useEffect(() => {
        console.log(input.value);
        setTipo(input.value);
    }, []);

    function handleTipoChange(event) {
        setTipo(parseInt(event.target.value));
    }
    return (
        <fieldset className="addrecomendacion__form__tipo">
            <legend className="addrecomendacion__form__tipo__legend textMd">
                Tipo:
            </legend>
            {input.options.map((radioUnit) => (
                <RadioUnit
                    key={radioUnit.id}
                    radioUnit={radioUnit}
                    action={handleTipoChange}
                    state={tipo}
                    inputConfig={input.required}
                />
            ))}
        </fieldset>
    );
}

function RadioUnit({ radioUnit, action, state, inputConfig }) {
    return (
        <div className="addrecomendacion__form__tipo__label__radioConteiner">
            <label
                htmlFor="video"
                className="addrecomendacion__form__tipo__label"
            >
                {radioUnit.name}
            </label>
            <input
                className="addrecomendacion__form__tipo__radio"
                type="radio"
                id={radioUnit.id}
                name={radioUnit.name}
                value={radioUnit.id}
                checked={state === radioUnit.id}
                onChange={action}
                required={inputConfig}
            />
        </div>
    );
}

export default RadioInput;
