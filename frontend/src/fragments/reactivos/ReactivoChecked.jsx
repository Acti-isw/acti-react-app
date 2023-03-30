import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Loader from '../../components/loader';
import reactiveService from '../../service/reactiveService';

const ReactivoChecked = ({ reactivo, index }) => {
    const [reactive, setReactive] = useState();

    useEffect(() => {
        reactiveService.getReactiveById(reactivo._id).then((res) => {
            setReactive(res);
        });
    }, []);

    if (!reactive) {
        <Loader />;
    } else {
        return (
            <div className="reative-conteiner" key={reactivo._id}>
                <h3 className="head-reactive">
                    Reactivo #{index}.{' '}
                    <span className="pts">Valor {reactive.valor}pts</span>
                </h3>
                <ReactMarkdown>{reactive.markdown}</ReactMarkdown>
                <div className="done-conteiner">
                    {!reactivo.done && <p className="unDone">No realizada</p>}
                    {reactivo.done && (
                        <div className="checker-conteiner">
                            {!reactivo.result && (
                                <div
                                    className="checker checker-incorrect-result"
                                    htmlFor={reactivo._id + '1'}
                                >
                                    Incorrecto
                                </div>
                            )}
                            {reactivo.result && (
                                <div
                                    className="checker checker-correct-result"
                                    htmlFor={reactivo._id + '0'}
                                >
                                    Correcto
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

export default ReactivoChecked;
