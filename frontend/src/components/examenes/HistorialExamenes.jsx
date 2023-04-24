import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ExamService from '../../service/ExamService';
import DateConverter from '../../utils/dateConverter';
import { loggedUser } from '../../UserContext';
import Loader from '../loader';
import './style.css';
import IndiceReprobacion from '../../fragments/indiceReprobacion';

function HistorialExamanes() {
    const [exams, setExams] = useState();
    const { currentUser } = useContext(loggedUser);

    useEffect(() => {
        ExamService.getExamByUser(currentUser.id).then((res) => {
            const arraySort = res.sort((a, b) => {
                return new Date(b.Date) - new Date(a.Date);
            });
            setExams(arraySort);
        });
    }, []);

    function getIndiceReprobacion() {
        let aprobacion = 0;
        exams.forEach((element) => {
            if (element.FinalResult) {
                aprobacion++;
            }
        });
        aprobacion = Math.floor((aprobacion / (exams.length - 1)) * 100);
        return aprobacion;
    }

    if (!exams) {
        return <Loader />;
    } else {
        return (
            <div className="content historialExamenes">
                <p className="title">Historial de examenes</p>
                {exams[0].reactives.length === 0 && (
                    <>
                        <h3>
                            Siguiente examen:
                            <br />
                            {DateConverter(exams[0].Date)}
                        </h3>
                        <p className="textMd">
                            Tema: {exams[0].topic[0].nombre}
                        </p>
                    </>
                )}
                {exams[0].reactives.length !== 0 && (
                    <h3>No hay ningun examen programado</h3>
                )}
                <IndiceReprobacion exams={exams} />
                {/* <p className="IAprobacion">Indice de aprobacion {getIndiceReprobacion()}%</p> */}
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
                                                <p className="estado pendiente">
                                                    Pendiente
                                                </p>
                                        )}
                                    {examRow.FinalResult === false && (
                                        <Link
                                            className="result-button"
                                            to={`/exam-checked/${examRow._id}`}
                                        >
                                            <p className="estado reprobado">
                                                Reprobado
                                            </p>
                                        </Link>
                                    )}
                                    {examRow.FinalResult === true && (
                                        <Link
                                            className="result-button"
                                            to={`/exam-checked/${examRow._id}`}
                                        >
                                            <p className="estado aprobado">
                                                Aprobado
                                            </p>
                                        </Link>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default HistorialExamanes;
