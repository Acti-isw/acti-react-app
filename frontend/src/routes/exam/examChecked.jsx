import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../../components/loader';
import ExamService from '../../service/ExamService';
import UserService from '../../service/UserService';
import Reactivo from './reactivo';
import ValidateUser from '../../components/validateAccess/ValidateUser';
import { loggedUser } from '../../UserContext';

const ExamChecked = () => {
    const {currentUser} = useContext(loggedUser)
    const { idExam } = useParams();
    const [user, setUser] = useState();
    const [exam, setExam] = useState();
    useEffect(() => {
        ExamService.getExamById(idExam).then((res) => {
            setExam(res);
            UserService.getUser(res.user).then((resUser) => {
                setUser(resUser[0]);
            });
        });
    }, []);

    if (exam === undefined || user === undefined) {
        return <Loader />;
    } else {
        return (
            <ValidateUser user={currentUser} id={user.id}>
                <div className="content exam">
                    <p className="title">Revisar examen</p>
                    <div className="data_exam">
                        <h3>{exam.topic.nombre}</h3>
                        <h2>{user.alias}</h2>
                        {exam.timeOver && (
                            <p className="textMd redText">
                                Enviado fuera de tiempo
                            </p>
                        )}
                    </div>
                    <p className="textMd">
                        Puntos necesarios: {exam.topic.minScore}
                    </p>
                    {exam.reactives.map((reactive) => (
                        <Reactivo
                            key={reactive._id}
                            reactivo={reactive}
                            // result={}
                            mode={2}
                            index={exam.reactives.indexOf(reactive) + 1}
                        />
                    ))}
                    <div className="extraPoints-container">
                        <p>
                            <span className="textMd">Puntaje extra: </span>
                            {exam.ScoreExtra}
                        </p>
                    </div>
                    <div className="note-container">
                        <label htmlFor="note">Nota: </label>
                        <p>{exam.Note}</p>
                    </div>
                    <div className="puntaje-container">
                        <h3>
                            Puntaje: {exam.FinalScore}/{exam.topic.minScore}
                        </h3>
                    </div>
                    <div className="resultado">
                        {exam.FinalResult && (
                            <h2 className="exam-success">Aprobado</h2>
                        )}
                        {!exam.FinalResult && (
                            <h2 className="exam-fail">Reprobado</h2>
                        )}
                    </div>
                    <div className="btnTerminar">
                        <Link to={-1}>
                            <button className="primary_button">Terminar</button>
                        </Link>
                    </div>
                </div>
            </ValidateUser>
        );
    }
};

export default ExamChecked;
