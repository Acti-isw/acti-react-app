import React from 'react';
import arrow from '../../assets/icons/arrow_icon.svg';
import { useState } from 'react';
import Curso from '../curso';
import {Link} from 'react-router-dom'
import './style.css';

function DesplegableCurso() {
    const [state, setState] = useState(false);

    return (
        <div className="desplegableCurso">
            <div
                className="title_course"
                onClick={() => {
                    setState(!state);
                }}
            >
                <h2>Cursos básicos</h2>
                <img
                    src={arrow}
                    className={state ? 'openArrow' : 'closeArrow'}
                    alt="Arrow"
                />
            </div>
            <div className={state ? 'courses_list' : 'none'}>
                {/* <Link to='/curso'> */}
                    <Curso nameCurso="JS Básico" />
                {/* </Link> */}
                <Link to='/curso'>
                    <Curso nameCurso="JS Básico" />
                </Link>
                <Link to='/curso'>
                    <Curso nameCurso="JS Básico" />
                </Link>
                {/* <Curso nameCurso="JS Básico" />
                <Curso nameCurso="JS Básico" /> */}
            </div>
        </div>
    );
}

export default DesplegableCurso;
