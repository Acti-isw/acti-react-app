import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Loader from '../../components/loader';
import reactiveService from '../../service/reactiveService';
import './style.css';

const ReactivoChecking = ({ reactivo, markCheck, index }) => {
    const [reactive, setReactive] = useState();

    useEffect(() => {
        reactiveService.getReactiveById(reactivo._id).then((res) => {
            setReactive(res);
        });
    }, []);

    function handleOnChange(event) {
        markCheck(reactivo, event.target.value==="true")
    }

    if (!reactive) {
        <Loader />;
    } else {
        return (
            <div className="reative-conteiner" key={reactivo._id}>
                <h3 className="head-reactive">
                    Reactivo #{index}.{' '}
                    <span className="pts">Valor {reactive.valor}pts</span>
                </h3>
                <ReactMarkdown>
                    {reactive.markdown}
                </ReactMarkdown>
                <div className="done-conteiner">
                {!reactivo.done && <p className="unDone">No realizada</p>}
                {reactivo.done && 
                    <fieldset className="checker-conteiner">
                        <input
                            type="radio"
                            name={reactivo._id}
                            id={reactivo._id + '1'}
                            value={false}
                            onChange={handleOnChange}
                            />
                        <label
                            className="checker checker-incorrect"
                            htmlFor={reactivo._id + '1'}
                            >
                            Incorrecto
                        </label>
                        <input
                            type="radio"
                            name={reactivo._id}
                            id={reactivo._id + '0'}
                            value={true}
                            onChange={handleOnChange}
                            />
                         <label
                            className="checker checker-correct"
                            htmlFor={reactivo._id + '0'}
                            >
                            Correcto
                        </label>
                        {/* </div> */}
                    </fieldset>
                }
                </div>
            </div>
        );
    }
};

export default ReactivoChecking;
