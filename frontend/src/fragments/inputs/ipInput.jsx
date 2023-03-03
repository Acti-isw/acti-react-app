import { useState } from 'react';

function IpInput({ input }) {
    // const [value, setValue] = useState(input.value ? input.value : '');

    return (
        <>
            <label>
                {input.label}
                <input
                    className="input_type1"
                    required={input.required}
                    name={input.name}
                    type={'text'}
                    placeholder={input.placeholder}
                    disabled={input.disable}
                    defaultValue={input.value}
                    pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
                />
            </label>
        </>
    );
}
export default IpInput;
