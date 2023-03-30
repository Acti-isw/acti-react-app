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
            return <ReactivoChecking reactivo={reactivo} markCheck={mark} index={index}/>;
            // break;
        case 2:
            return <ReactivoChecked reactivo={reactivo} index={index}/>
    }
};


export default Reactivo;
