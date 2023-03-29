function FileInput({ input }) {
    function onChange(e) {
        // console.log(e.target.files);
    }
    return (
        <>
            <label>
                {input.label}
                <input
                    className="input_type1"
                    required={input.required}
                    name={input.name}
                    type={input.inputType}
                    disabled={input.disable}
                    onChange={onChange}
                />
            </label>
        </>
    );
}
export default FileInput;
