import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ExamService from '../../service/ExamService';
import TemaService from '../../service/TemaService';
import UserService from '../../service/UserService';
import DateConverter from '../../utils/dateConverter';
import Loader from '../loader';
import './style.css';

function HistorialExamanes() {
    const { id } = useParams();
    const [exams, setExams] = useState();
    const [topic, setTopic] = useState();
    // const [user, setUser] = useState();

    useEffect(() => {
        ExamService.getExamByUser(id).then((res) => {
            // console.log(res);
            setExams(res);
            TemaService.getTopics().then((top) => {
                setTopic(top);
            });
        });
    }, []);

    if (!exams || !topic) {
        return <Loader />;
    } else {
        return (
            <div className="content historialExamenes">
                <p className="title">Historial de examenes</p>
                {exams[exams.length - 1].reactives.length === 0 && (
                    <>
                        <h3>
                            Siguiente examen:
                            <br />
                            {DateConverter(exams[exams.length - 1].Date)}
                        </h3>
                        <p className="textMd">
                            Tema:{' '}
                            {
                                topic.find(
                                    (top) =>
                                        top.id === exams[exams.length - 1].topic
                                ).nombre
                            }
                        </p>
                    </>
                )}
                {exams[exams.length - 1].reactives.length !== 0 && (
                    <h3>No hay ningun examen programado</h3>
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
                                    <p>
                                        {
                                            topic.find(
                                                (top) =>
                                                    top.id === examRow.topic
                                            ).nombre
                                        }
                                    </p>
                                </td>
                                <td>
                                    <p>{DateConverter(examRow.Date)}</p>
                                </td>
                                <td>
                                    {!examRow.FinalScore && (
                                        <p className="estado pendiente">
                                            Pendiente
                                        </p>
                                    )}
                                    {examRow.FinalResult === false && (
                                        <p className="estado reprobado">
                                            Reprobado
                                        </p>
                                    )}
                                    {examRow.FinalResult === true && (
                                        <p className="estado aprobado">
                                            Aprobado
                                        </p>
                                    )}
                                </td>
                            </tr>
                        ))}
                        <tr className="examenes__tr">
                            <td>
                                <p>JS Básico</p>
                            </td>
                            <td>
                                <p>10/12/2023</p>
                            </td>
                            <td>
                                <p className="estado aprobado">Aprobado</p>
                            </td>
                        </tr>
                        <tr className="examenes__tr">
                            <td>
                                <p>JS Básico</p>
                            </td>
                            <td>
                                <p>10/12/2023</p>
                            </td>
                            <td>
                                <p className="estado reprobado">Reprobado</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default HistorialExamanes;
