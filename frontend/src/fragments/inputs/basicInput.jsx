function BasicInput({ input }) {
    return (
        <>
            <label>
                {input.name}
                <input
                    className="input_type1"
                    required={input.required}
                    name={input.name}
                    type={input.inputType}
                    defaultValue={input.value}
                    placeholder={input.placeholder}
                    disabled= {input.disable}
                    checked={input.checked}
                />
            </label>
        </>
    );
}
export default BasicInput;
