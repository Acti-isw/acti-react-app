import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/loader';
import ExamService from '../../service/ExamService';
import UserService from '../../service/UserService';
import Reactivo from './reactivo';
import { loggedUser } from '../../UserContext';
import ValidateAccess from '../../components/validateAccess';
import './style.css';
import TemaService from '../../service/TemaService';

const ExamChecking = () => {
    const { idExam } = useParams();
    const [exam, setExam] = useState();
    const [user, setUser] = useState();
    const [score, setScore] = useState(0);
    const [extraScore, setExtraScore] = useState(0);
    const { currentUser } = useContext(loggedUser);
    const navigate = useNavigate();

    useEffect(() => {
        ExamService.getExamById(idExam).then((res) => {
            setExam(res);
            if (res.FinalScore != undefined) {
                navigate(`/exam-checked/${idExam}`);
            }
            UserService.getUser(res.user).then((user) => {
                setUser(user[0]);
            });
        });
    }, []);

    useEffect(() => {
        countScore();
    }, [extraScore]);

    function countScore() {
        let sum = 0;
        exam?.reactives.forEach((element) => {
            if (element.result) {
                sum += element.score;
            }
        });
        setScore(sum + extraScore);
    }
    function handleOnExtraScore(event) {
        setExtraScore(parseInt(event.target.value ? event.target.value : 0));
    }

    function handleOnCheck(reactivo, value, reactiveScore) {
        reactivo['score'] = reactiveScore;
        reactivo['result'] = value;
        countScore();
    }
    function nextExam(topic, date) {
        const nextExam = {
            topic: topic,
            user: user.id,
            Date: date
        };
        ExamService.createExam(nextExam);
    }
    function handleOnSave(event) {
        event.preventDefault();
        const resultExam = {
            ...exam,
            topic: exam.topic.id,
            Note: event.target.note.value,
            ScoreExtra: extraScore,
            FinalScore: score,
            FinalResult: score >= exam.topic.minScore,
            Applicator: currentUser.id
        };
        ExamService.updateExam(idExam, resultExam)
            .then(() => {
                if (resultExam.FinalResult) {
                    TemaService.getTopics().then((res) => {
                        if (res[exam.topic.id] === res[res.length - 1]) {
                            UserService.updateUser(user.id ,{nextExam:""})
                            // All exams finished
                        } else {
                            const nextExamDate = new Date();
                            nextExamDate.setDate(nextExamDate.getDate() + 14);
                            // nextExam
                            UserService.updateUser(user.id ,{nextExam:nextExamDate})
                            // nextExamDate.setDate(nextExamDate);
                            nextExam(res[exam.topic.id + 1].id, nextExamDate);
                        }
                    });

                    // console.log(user.infoActi.Nivel+1);
                    const dataTry = {
                        infoActi: {
                            ...user.infoActi,
                            Nivel: user.infoActi.Nivel + 1
                        },
                        intentos: 2
                    };
                    // console.log(dataTry);
                    UserService.updateUser(user.id, dataTry);
                } else {
                    const dataTry = {
                        intentos: user.intentos - 1
                    };
                    // console.log(dataTry);
                    UserService.updateUser(user.id, dataTry);
                    if (dataTry.intentos > 0) {
                        const nextExamDate = new Date();
                        nextExamDate.setDate(nextExamDate.getDate() + 7);
                        UserService.updateUser(user.id ,{nextExam:nextExamDate})
                        // nextExamDate.setDate(nextExamDate);
                        nextExam(exam.topic.id, nextExamDate);
                    }
                }
            })
            .finally(() => {
                navigate(`/gestionarexamenes/${exam.user}`);
            });
    }

    if (!exam || !user) {
        return <Loader />;
    } else {
        return (
            <ValidateAccess>
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
                            mode={1}
                            index={exam.reactives.indexOf(reactive) + 1}
                            mark={handleOnCheck}
                        />
                    ))}
                    <form action="" onSubmit={handleOnSave}>
                        <div className="extraPoints-container">
                            <label htmlFor="ptsExtra">
                                Añadir puntos extra
                            </label>
                            <input
                                type="number"
                                className="inputPtsExtra"
                                id="ptsExtra"
                                name="ptsExtra"
                                onChange={handleOnExtraScore}
                            />
                        </div>
                        <div className="note-container">
                            <label htmlFor="note">Nota</label>
                            <textarea
                                name="note"
                                id="note"
                                cols="30"
                                rows="10"
                                className="note"
                            ></textarea>
                        </div>
                        <div className="puntaje-container">
                            <p>
                                Puntaje: {score}/{exam.topic.minScore}
                            </p>
                        </div>
                        <div className="resultado">
                            {score >= exam.topic.minScore && (
                                <h3 className="exam-success">Aprobado</h3>
                            )}
                            {score < exam.topic.minScore && (
                                <h3 className="exam-fail">Reprobado</h3>
                            )}
                        </div>
                        <div className="btnTerminar">
                            <button type="submit" className="primary_button">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </ValidateAccess>
        );
    }
};

export default ExamChecking;
