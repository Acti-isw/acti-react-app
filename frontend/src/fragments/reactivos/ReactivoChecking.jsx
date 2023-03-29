import React from 'react';
import ReactMarkdown from 'react-markdown';

const ReactivoChecking = ({ reactivo, markCheck, index}) => {
    return (
        <div className="reative-conteiner" key={reactivo._id}>
            <h3 className="head-reactive">
                Reactivo #{index}.{' '}
                <span className="pts">Valor {reactivo.valor}pts</span>
            </h3>
            <ReactMarkdown>
                {reactivo.markdown}
                {/* {parse(reactivo.markdown)} */}
            </ReactMarkdown>
            <div className="done-conteiner">
                <label htmlFor={reactivo._id} className="lblDone">
                    Hecho:
                </label>
                {/* <input
                    type="checkbox"
                    value="done"
                    name="checkbox"
                    id={reactivo._id}
                    className="inputDone"
                    onChange={() => {
                        markDone(event, reactivo);
                    }}
                /> */}
            </div>
        </div>
    );
};

export default ReactivoChecking;
