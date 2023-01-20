import React from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom'

import HTML from '../../assets/coursesBackground/HTML.webp';
import CSS from '../../assets/coursesBackground/CSS.webp';
import JS from '../../assets/coursesBackground/JS.webp';
import MONGO from '../../assets/coursesBackground/MONGODB.webp';
import GIT from '../../assets/coursesBackground/GIT.webp';
import GITHUB from '../../assets/coursesBackground/GITHUB.webp';
import FIGMA from '../../assets/coursesBackground/FIGMA.webp';
import SQLSERVER from '../../assets/coursesBackground/SQLSERVER.webp';
import NODE from '../../assets/coursesBackground/NODE.webp';
import REACT from '../../assets/coursesBackground/REACT.webp';

import Icon_HTML from '../../assets/icons/html_icon.svg';
import Icon_CSS from '../../assets/icons/css_icon.svg';
import Icon_JS from '../../assets/icons/js_icon.svg';
import Icon_MONGO from '../../assets/icons/mongodb_icon.svg';
import Icon_GIT from '../../assets/icons/git_icon.svg';
import Icon_GITHUB from '../../assets/icons/github_icon.svg';
import Icon_FIGMA from '../../assets/icons/figma_icon.svg';
import Icon_SQLSERVER from '../../assets/icons/sqlserver_icon.svg';
import Icon_NODE from '../../assets/icons/node_icon.svg';
import Icon_REACT from '../../assets/icons/react_icon.svg';

function Curso(props) {
    const background = {
        background: `url(${JS})`
    };
    const navigate = useNavigate();
    function goToCursoPage() {
        navigate(`/curso/${props.curso.id}`)
    }
    return (
        <div className="curso" onClick={goToCursoPage}>
            <div className="head_curso">
                <div className="">
                    <p className="text">Curso</p>
                    <p className="textMd">{props.curso.nombre}</p>
                </div>
                <img src={Icon_JS} alt="ThemeIcon" />
            </div>
            <div className="themes">
                <ul>
                    {props.curso.listadoConocimiento.map((conocimiento)=>(
                        <li key={conocimiento}>{conocimiento}</li>
                    ))}
                    {/* <li>Variables</li>
                    <li>Ciclos</li>
                    <li>Switch</li>
                    <li>Logica</li>
                    <li>Casteo</li> */}
                </ul>
            </div>
        </div>
    );
}

export default Curso;
