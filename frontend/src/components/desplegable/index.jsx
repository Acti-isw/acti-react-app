import React from 'react';
import arrow from '../../assets/icons/arrow_icon.svg';
import { useState } from 'react';
import './style.css';

function Desplegable(props) {
    const [state, setState] = useState(false);

    return (
        <div className="desplegable">
            <div
                className="title_course"
                onClick={() => {
                    setState(!state);
                }}
            >
                <h2>{props.titulo}</h2>
                <img
                    src={arrow}
                    className={state ? 'openArrow' : 'closeArrow'}
                    alt="Arrow"
                />
            </div>
            <div className={state ? 'courses_list' : 'none'}>
                {props.children}
                {/* <Link to='/curso'> */}
                    {/* <Curso nameCurso="JS Básico" /> */}
                {/* </Link> */}
                {/* <Link to='/curso'>
                    <Curso nameCurso="JS Básico" />
                </Link>
                <Link to='/curso'>
                    <Curso nameCurso="JS Básico" />
                </Link> */}
                {/* <Curso nameCurso="JS Básico" />
                <Curso nameCurso="JS Básico" /> */}
            </div>
        </div>
    );
}

export default Desplegable;
