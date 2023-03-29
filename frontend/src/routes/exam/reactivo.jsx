import React from 'react';
import ReactivoDefault from '../../fragments/reactivos/ReactivoDefault';
import ReactivoChecking from '../../fragments/reactivos/ReactivoChecking';
import ReactivoChecked from '../../fragments/reactivos/ReactivoChecked';

const Reactivo = ({ reactivo, mark, index, mode }) => {
  // console.log(mark);  s
  switch (mode) {
        case 0:
            return <ReactivoDefault reactivo={reactivo} markDone={mark} index={index}/>
        // break;
        case 1:
          console.log(reactivo);
            return <ReactivoChecking reactivo={reactivo} markCheck={mark} index={index}/>;
            // break;
        case 2:
            break;
    }
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
                <input
                    type="checkbox"
                    value="done"
                    name="checkbox"
                    id={reactivo._id}
                    className="inputDone"
                    onChange={() => {
                        markDone(event, reactivo);
                    }}
                />
            </div>
        </div>
    );
};


export default Reactivo;
