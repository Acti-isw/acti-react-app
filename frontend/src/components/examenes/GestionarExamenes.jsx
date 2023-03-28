import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TemaService from '../../service/TemaService';
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
    const [topics, setTopics] = useState();
    const [modal, setModal] = useState(false);

    useEffect(() => {
        UserService.getUser(id).then((res) => {
            setUser(res[0]);
        });
        TemaService.getTopics().then((res) => {
            setTopics(res);
        });
        ExamService.getExamByUser(id).then((res) => {
            setExams(res);
        })
    }, [modal]);

    function closeModal() {
        setModal(false);
    }

    if (user === undefined || topics === undefined || exams === undefined) {
        return <Loader />;
    } else {
        return (
            <div className="content gestionExamenes">
                <p className="title">Programar Examen</p>
                <h3 className="">{user.alias}</h3>
                {user.examenes && (
                    <p className="textMd">
                        Siguiente examen: <br />
                        {DateConverter(exams[exams.length - 1].Date)}
                    </p>
                )}
                <p className="textMd">Tema: JS arreglos</p>
                <button className="primary_button" onClick={()=>{setModal(true)}} >Cambiar fecha</button>
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
                        {user.examenes.map((examRow) => (
                            <tr className="examenes__tr" key={examRow._id}>
                                <td>
                                    <p>
                                        {
                                            topics.find(
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
                                    {/* <p className="estado pendiente">Pendiente</p> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {modal && <ModalNewDate examen={exams[exams.length - 1]} closeModal={closeModal}/>}
            </div>
        );
    }
}

export default GestionarExamenes;
