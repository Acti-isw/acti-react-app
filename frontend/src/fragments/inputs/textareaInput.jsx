function TextAreaInput({ input }) {
    return (
        <label>
            {input.name}
            <textarea
                cols={input.cols}
                rows={input.rows}
                required={input.required}
                name={input.name}
                type={input.inputType}
                defaultValue={input.value}
                placeholder={input.placeholder}
            ></textarea>
        </label>
    );
}

export default TextAreaInput;
