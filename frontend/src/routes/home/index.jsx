import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Aviso from '../../components/aviso';
import Desplegable from '../../components/desplegable';
import RamImg from '../../assets/Ramses_Parker.png';
import Curso from '../../components/curso';
import AvisoService from '../../service/AvisoService';
import TemaService from '../../service/TemaService';
import ExamService from '../../service/ExamService';
import ActiLogo from '../../assets/actilogo.png';
import { loggedUser } from '../../UserContext';

function Home() {
    const { currentUser } = useContext(loggedUser);
    const [exam, setExam] = useState();
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
        ExamService.getExamByUser(currentUser.id).then((res) => {
            const arraySort = res.sort((a, b) => {
                return new Date(b.Date) - new Date(a.Date);
            });
            setExam(arraySort[0]);
        });
    }, []);

    function getDateNextExam(nextExam) {
        const difference = new Date(nextExam) - new Date();
        const days = Math.ceil(difference / 1000 / 60 / 60 / 24);
        return days;
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
                    {exam?.reactives.length === 0 && (
                        <>
                            <Aviso
                                text={
                                    'Tu siguiente examen sera en ' +
                                    getDateNextExam(exam.Date) +
                                    ' dias'
                                }
                                color="var(--danger)"
                                tema={'Tema: ' + exam?.topic[0].nombre}
                                examen={'/exam'}
                                className="examenAdvice"
                            />
                        </>
                    )}
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
                            // onClick={goToCursoPage}
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
