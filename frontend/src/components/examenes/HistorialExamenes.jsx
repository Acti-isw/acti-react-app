import React, { useEffect, useState, useContext } from 'react';
import ExamService from '../../service/ExamService';
import TemaService from '../../service/TemaService';
import UserService from '../../service/UserService';
import DateConverter from '../../utils/dateConverter';
import { loggedUser } from '../../UserContext';
import Loader from '../loader';
import './style.css';

function HistorialExamanes() {
    const [exams, setExams] = useState();
    const { currentUser } = useContext(loggedUser);

    useEffect(() => {
        ExamService.getExamByUser(currentUser.id).then((res) => {
            const arraySort = res.sort((a, b)=>{
                return new Date(b.Date)-new Date(a.Date);
            })
            setExams(arraySort);
        });
    }, []);

    if (!exams ) {
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
                            Tema:{' '}
                            { 
                              exams[0].topic[0].nombre
                            }
                        </p>
                    </>
                )}
                {exams[0].reactives.length !== 0 && (
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
                                        {examRow.topic[0].nombre}
                                    </p>
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
                    </tbody>
                </table>
            </div>
        );
    }
}

export default HistorialExamanes;
