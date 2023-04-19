import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Aviso from '../../components/aviso';
import Desplegable from '../../components/desplegable';
import RamImg from '../../assets/Ramses_Parker.png';
import Curso from '../../components/curso';
import AvisoService from '../../service/AvisoService';
import TemaService from '../../service/TemaService';
import ActiLogo from '../../assets/actilogo.png';
// import { loggedUser } from '../../UserContext';

function Home() {
    // const navigate = useNavigate();
    // const context = useContext(loggedUser);
    const [Avisos, setAvisos] = useState([]);
    const [Cursos, setCursos] = useState([]);

    useEffect(() => {
        AvisoService.getAnnonucement()
            .then((res) => {
                setAvisos(res);
            })
            .catch((err) => {
                throw err;
            });
        TemaService.getTopics()
            .then((res) => {
                setCursos(res);
            })
            .catch((err) => {
                throw err;
            });
    }, []);

    function goToCursoPage() {
        console.log('a');
    }

    return (
        <div className="Home content" id="home">
            <header>
                <div className="header__title">
                    <div className="header__title--texts">
                        <h1>ACTI</h1>
                        <p className="text mainText">
                            Centro de asesoria y consultoria en tecnologias de
                            informacion
                        </p>
                    </div>
                    <img src={ActiLogo} alt="" className="actiIcon" />
                </div>
                <div className="avisosBox">
                    <Link to="/exam" className="btn_aviso">
                        <Aviso
                            text="Siguiente examen: 10 días"
                            color="var(--danger)"
                            tema="JS Arreglos avanzados"
                            className="examenAdvice"
                        />
                    </Link>
                    {Avisos.map((aviso) => (
                        <Aviso
                            key={aviso.id}
                            text={aviso.mensaje}
                            color={aviso.color}
                        />
                    ))}
                </div>
            </header>
            <main>
                <Desplegable titulo={'Cursos básicos'}>
                    {Cursos.map((curso) => (
                        // <div className='curso-conteiner' key={curso.id} onClick={goToCursoPage}>
                        <Curso
                            onClick={goToCursoPage}
                            curso={curso}
                            key={curso.id}
                        />
                        //  </div>
                    ))}
                </Desplegable>
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
