import React, { useState } from 'react';
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
    
    const [tech, setTech] = useState(props?.curso?.tecnologia)
    return (
        <div className="curso" onClick={goToCursoPage}>
            <div className="head_curso" style={{ background: `url(${ImgTemas[tech]?.img})`, color:ImgTemas[tech]?.color}}>
                <div className="head__curso__titles">
                    <p className="cursoTxt">Curso</p>
                    <p className="textMd">{props.curso.nombre}</p>
                </div>
                <img src={ImgTemas[tech]?.icon} alt="ThemeIcon" />
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

const ImgTemas=[]
    ImgTemas["JS"]={img:JS, icon:Icon_JS, color:'#ffaf2d'};
    ImgTemas["CSS"]={img:CSS, icon:Icon_CSS, color:'#0159FD'}
    ImgTemas["HTML"]={img:HTML, icon:Icon_HTML, color:'#f06426'}
    ImgTemas["MONGO"]={img:MONGO, icon:Icon_MONGO, color:'#57b26f'}
    ImgTemas["GIT"]={img:GIT, icon:Icon_GIT, color:'#ef3e05'}
    ImgTemas["GITHUB"]={img:GITHUB, icon: Icon_GITHUB, color:'#9513f7'}
    ImgTemas["FIGMA"]={img:FIGMA, icon:Icon_FIGMA, color:'#e5a4d7'}
    ImgTemas["SQLSERVER"]={img:SQLSERVER, icon:Icon_SQLSERVER, color:'#c30f10'}
    ImgTemas["NODE"]={img:NODE, icon:Icon_NODE, color:'#6cc010'}
    ImgTemas["REACT"]={img:REACT, icon:Icon_REACT, color:'#3c82ff'}
    // "JS":
    //     "CSS"={img:CSS, icon:Icon_CSS},
    //     "fHTML"={img:HTML, icon:Icon_HTML},
    //     "MONGO"={img:MONGO, icon:Icon_MONGO},
    //     "GIT"={img:GIT, icon:Icon_GIT},
    //     "GITHUB"={img:GITHUB, icon: Icon_GITHUB},
    //     "FIGMA"={img:FIGMA, icon:Icon_FIGMA},
    //     "SQLServer"={img:SQLSERVER, icon:Icon_SQLSERVER},
    //     "NODE"={img:NODE, icon:Icon_NODE},
    //     "REACT"={img:REACT, icon:Icon_REACT}
// ]

export default Curso;

