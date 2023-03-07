import InputBuider from '../../fragments/inputs/inputBuilder';
import './style.css';
/**
 *
 * @param {Array} [inputs]
 *  It receive array of json with the properties of the input
 * @param {Array} [json]
 * It receive array of json with the names of the controls
 * @returns Form
 */
function FormBuilder({inputs, controls, cancelAction, submitAction, formTitle}) {
    const text = {
        inputType: 'text',
        name: 'text',
        required: true,
        value: 'mssj',
        placeholder: 'Ingrese texto'
    };
    const textarea = {
        inputType: 'textarea',
        name: 'mensaje',
        cols: 10,
        rows: 5,
        required: true,
        value: 'mssjr',
        placeholder: 'Ingrese texto'
    };
    const color = {
        inputType: 'color',
        required: true,
        value: '#aa0021'
    };
    const email = {
        inputType: 'email',
        name: 'email',
        required: true,
        placeholder: 'correo@gmail.com',
        value: 'acti@gmail.com'
    };
    const radio = {
        inputType: 'radio',
        name: 'cel',
        required: true,
        value: 3,
        options: [
            { name: 'video', id: 0 },
            { name: 'documentacion', id: 1 },
            { name: 'servicio', id: 2 },
            { name: 'tutorial', id: 3 }
        ]
    };
    const select = {
        inputType: 'select',
        name: 'rol',
        required: true,
        value: 2,
        options: [
            { name: 'video', id: 0 },
            { name: 'documentacion', id: 1 },
            { name: 'servicio', id: 2 },
            { name: 'tutorial', id: 3 }
        ]
    };
    const date = {
        inputType: 'date',
        name: 'fecha',
        required: true,
        value: '2023-10-10'
    };
    const check = {
        inputType: 'checkbox',
        name: 'check',
        checked: true,
        disable: true
    };
    const file = {
        inputType: 'file',
        name: 'profilePhoto',
        id: 'profilePhoto',
        accept: 'image/png, image/jpeg',
        required: true
    };
    
    // there isn't file input yet

    function handlerSubmit(event){
        // console.log(event);
      event.preventDefault();
      submitAction(event)
    }
    
    return (
        <>
        <h3>{formTitle}</h3>
            <form
                encType="multipart/form-data"
                onSubmit={handlerSubmit}
                className="form"
            >
                {inputs.map((input) => (
                    <InputBuider input={input} key={input.name} />
                ))}
                <div className="buttonsBoxs">
                    <button type="submit" className="primary_button">
                        {controls[0]}
                    </button>
                    {controls[1] && (
                        <button
                            type="button"
                            className="secondary_button"
                            onClick={cancelAction}
                        >
                            {controls[1]}
                        </button>
                    )}
                </div>
            </form>
        </>
    );
}

export default FormBuilder;
