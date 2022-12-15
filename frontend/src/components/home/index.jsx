import React, { useContext } from 'react';
// import {useNavigate} from 'react-router-dom'
import './style.css';
import Aviso from '../aviso';
import DesplegableCurso from '../desplegableCurso';
import RamImg from '../../assets/Ramses_Parker.png';
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
                    />
                </div>
                <Aviso
                    text="Siguiente examen: 10 días"
                    color="var(--danger)"
                    tema="JS Arreglos avanzados"
                />
            </header>
            <main>
                <DesplegableCurso />
                <DesplegableCurso />
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
