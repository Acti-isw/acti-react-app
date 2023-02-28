import { useEffect, useState } from 'react';

function CheckBoxInput({ input }) {
    const [check, setCheck] = useState(input.checked);
    useEffect(() => {
        setCheck(input.checked);
    }, []);

    function handleTipoChange(event) {
        console.log(event.target.checked);
        setCheck(event.target.checked);
    }

    return (
        <>
            <label>
                {input.name}
                <input
                    className="input_type1"
                    type={input.inputType}
                    name={input.name}
                    onChange={handleTipoChange}
                    checked={check}
                    disabled={input.disable}
                />
            </label>
        </>
    );
}
export default CheckBoxInput;
