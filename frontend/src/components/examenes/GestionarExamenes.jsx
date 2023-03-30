import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import UserService from '../../service/UserService';
import Loader from '../loader';
import DateConverter from '../../utils/dateConverter';
import ModalNewDate from './modalNewDate';
import './style.css';
import ExamService from '../../service/ExamService';

function GestionarExamenes() {
    const { id } = useParams();
    const [user, setUser] = useState();
    const [exams, setExams] = useState();
    const [modal, setModal] = useState(false);

    useEffect(() => {
        UserService.getUser(id).then((res) => {
            setUser(res[0]);
        });
        ExamService.getExamByUser(id).then((res) => {
            const arraySort = res.sort((a, b) => {
                return new Date(b.Date) - new Date(a.Date);
            });
            setExams(arraySort);
        });
    }, [modal]);

    function closeModal() {
        setModal(false);
    }

    if (user === undefined || exams === undefined) {
        return <Loader />;
    } else {
        return (
            <div className="content gestionExamenes">
                <p className="title">Programar Examen</p>
                <h3 className="">{user.alias}</h3>
                {exams[0].reactives.length == 0 && (
                    <div className="next-exam">
                        <p className="textMd">
                            Siguiente examen: <br />
                            {DateConverter(exams[0].Date)}
                        </p>
                        <p className="textMd">
                            Tema: {exams[0].topic[0].nombre}
                        </p>
                        <button
                            className="primary_button"
                            onClick={() => {
                                setModal(true);
                            }}
                        >
                            Cambiar fecha
                        </button>
                    </div>
                )}
                {!exams[0].reactives.length == 0 && (
                    <p className="textMd">No hay examenes programados</p>
                )}
                <p className="IReprobacion">Indice de reprobacion</p>
                <p className="textMd">Historial de examenes</p>
                <table className="examenes__table ">
                    <thead>
                        <tr>
                            <th>Tema</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exams.map((examRow) => (
                            <tr className="examenes__tr" key={examRow._id}>
                                <td>
                                    <p>{examRow.topic[0].nombre}</p>
                                </td>
                                <td>
                                    <p>{DateConverter(examRow.Date)}</p>
                                </td>
                                <td>
                                    {examRow.reactives.length === 0 && (
                                        <p> Sin realizar</p>
                                    )}
                                    {examRow.FinalResult === undefined &&
                                        examRow.reactives.length > 0 && (
                                            <Link to={`/exam/${examRow._id}`}>
                                                <p className="estado pendiente">
                                                    Pendiente
                                                </p>
                                            </Link>
                                        )}
                                    {examRow.FinalResult === false && (
                                        <Link className='result-button' to={`/exam-checked/${examRow._id}`}>
                                            <p className="estado reprobado">
                                                Reprobado
                                            </p>
                                        </Link>
                                    )}
                                    {examRow.FinalResult === true && (
                                        <Link className='result-button' to={`/exam-checked/${examRow._id}`}>
                                            <p className="estado aprobado">
                                                Aprobado
                                            </p>
                                        </Link>
                                    )}
                                    {/* <p className="estado pendiente">Pendiente</p> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {modal && (
                    <ModalNewDate examen={exams[0]} closeModal={closeModal} />
                )}
            </div>
        );
    }
}

export default GestionarExamenes;
