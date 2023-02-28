import { useEffect, useState } from 'react';
import Select from "react-select"

function SelectInput({ input }) {
    const [selectTema, setSelectTema] = useState();
    const [temas, setTemas] = useState([]);

    useEffect(() => {
            const options = [];
            input.options.map((opt)=>{
                if(opt.id===input.value){
                    setSelectTema({
                        value:opt.id,
                        label: opt.name
                    })
                }
                options.push({
                    value:opt.id,
                    label: opt.name
                })
            })
            setTemas(options)
    }, []);
    function handleTemaChange(event) {
        // e.preventDefault();
        setSelectTema(event);
    }

        return (
            <label>
            {input.name}
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
        </label>
        );
}

export default SelectInput ;