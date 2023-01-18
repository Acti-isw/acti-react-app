import React, { useContext } from 'react';
// import {useNavigate} from 'react-router-dom'
import './style.css';
import Aviso from '../aviso';
import Desplegable from '../desplegable';
import RamImg from '../../assets/Ramses_Parker.png';
import Curso from '../curso'
// import { loggedUser } from '../../UserContext';

function Home() {
    // const context = useContext(loggedUser);

    return (
        <div className="Home content" id="home">
            <header>
                <h1>ACTI</h1>
                <p className="text mainText">
                    Centro de asesoria y consultoria en tecnologias de
                    informacion
                </p>
                <div className="avisosBox">
                    <Aviso
                        text="Aviso que avisa muy avisador"
                        color="var(--alert)"
                        editable = {true}
                    />
                </div>
                <Aviso
                    text="Siguiente examen: 10 días"
                    color="var(--danger)"
                    tema="JS Arreglos avanzados"
                />
            </header>
            <main>
                <Desplegable titulo={'Cursos básicos'}>
                    <Curso nameCurso="JS Básico" />
                    {/* </Link> */}
                    {/* <Link to="/curso"> */}
                        <Curso nameCurso="JS Básico" />
                    {/* </Link> */}
                    {/* <Link to="/curso"> */}
                        <Curso nameCurso="JS Básico" />
                    {/* </Link> */}
                </Desplegable>
                {/* <DesplegableCurso /> */}
            </main>
            <footer>
                <img
                    src={RamImg}
                    alt="Dejen de hacerse pendejos.png"
                    className="footerImg"
                />
            </footer>
        </div>
    );
}

export default Home;
