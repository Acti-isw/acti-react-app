import React, { useEffect, useState } from 'react';
import Select from 'react-select';

function SelectInput({ input }) {
    const [selectTema, setSelectTema] = useState(input.value);
    const [temas, setTemas] = useState([]);

    useEffect(() => {
        const options = [];
        input.options.map((opt) => {
            if (opt.id === input.value) {
                setSelectTema(opt.id);
            }
            options.push({
                value: opt.id,
                label: opt.nombre,
                selected: opt.id === input.value
            });
        });
        setTemas(options);
    }, []);
    function handleTemaChange(event) {
        setSelectTema(event.target.value);
    }

    return (
        <label>
            {input.label}
            <select
                className='input_select'
                required
                name={input.name}
                id={input.name}
                value={selectTema}
                onChange={handleTemaChange}
            >
                {temas.map((tema) => (
                    <option value={tema.value} key={tema.value}>
                        {tema.label}
                    </option>
                ))}
            </select>
            {/* <Select
                maxMenuHeight={150}
                required
                id={input.name}
                name={input.name}
                value={selectTema}
                onChange={handleTemaChange}
                options={temas}
            /> */}
        </label>
    );
}

export default SelectInput;
