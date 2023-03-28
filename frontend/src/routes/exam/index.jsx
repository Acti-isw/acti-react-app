import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import reactiveService from '../../service/reactiveService';
import ReactMarkdown from 'react-markdown';
import TemaService from '../../service/TemaService';
import Timer from '../../components/timer';
import './style.css';
import Loader from '../../components/loader';
import ModalEndExam from './modal';
import ExamService from '../../service/ExamService';
import { useContext } from 'react';
import { loggedUser } from '../../UserContext';

function Exam() {
    // const { tema } = useParams();
    const navigate = useNavigate();
    const [exam, setExam] = useState();
    // const [reactivos, setReactivos] = useState();
    const [topic, setTopic] = useState();
    const [Loading, setLoading] = useState(true);
    const [finish, setFinish] = useState(false);
    const [over, setOver] = useState(false);
    const { currentUser } = useContext(loggedUser);

    useEffect(() => {
        // setReactivos(reactives);
        ExamService.getExamByUser(currentUser.id).then((res) => {
            if (res[res.length - 1].reactives == 0) {
                TemaService.getTopic(res[res.length - 1].topic).then((top) => {
                    setTopic(top[0]);
                    reactiveService
                    .getReactivesExam(res[res.length - 1].topic)
                    .then((reactives) => {
                        console.log(res[res.length - 1]);
                        const newExamData = {
                            _id: res[res.length - 1]._id,
                            topic: top[0].id,
                            Date: new Date(),
                            reactives: reactives,
                            timeOver: over
                        };
                        setExam(newExamData);
                        ExamService.updateExam(
                            res[res.length - 1]._id,
                            newExamData
                            );
                        });
                    });
            } else {
                //algo pa cuando no haya examen programado
                // console.log('none');
                navigate('/notallowed');
            }
        });
    }, []);

    useEffect(() => {
        if (topic != undefined && exam?.reactives != undefined) {
            setLoading(false);
        }
    }, [topic, exam]);

    function onFinish() {
        setFinish(true);
    }

    function onDone(event, reactivo) {
        reactivo['done'] = event.target.checked;
    }

    if (Loading) {
        return <Loader />;
    } else {
        return (
            <div className="content exam">
                {topic && <p className="title">Examen {topic?.nombre}</p>}
                {!topic && <p className="title">Examen Loading...</p>}
                <div className="examHeader">
                    <Timer
                        initHours={parseInt(topic?.timeExam)}
                        over={over}
                        setOver={setOver}
                    />
                    <p className="ptsExam">
                        Puntos necesarios: {topic?.minScore}
                    </p>
                    <pre className="text instructions">
                        <span className="instructions-span">
                            Instrucciones:
                        </span>
                        {topic?.examRules}
                    </pre>
                </div>
                {exam.reactives &&
                    exam.reactives.map((reactivo) => (
                        <div className="reative-conteiner" key={reactivo._id}>
                            <h3 className="head-reactive">
                                Reactivo #{exam.reactives.indexOf(reactivo) + 1}
                                .{' '}
                                <span className="pts">
                                    Valor {reactivo.valor}pts
                                </span>
                            </h3>
                            <ReactMarkdown>
                                {reactivo.markdown}
                                {/* {parse(reactivo.markdown)} */}
                            </ReactMarkdown>
                            <div className="done-conteiner">
                                <label
                                    htmlFor={reactivo._id}
                                    className="lblDone"
                                >
                                    Hecho:
                                </label>
                                <input
                                    type="checkbox"
                                    value="done"
                                    name="checkbox"
                                    id={reactivo._id}
                                    className="inputDone"
                                    onChange={() => {
                                        onDone(event, reactivo);
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                <div className="btn-conteiner">
                    <button className="primary_button" onClick={onFinish}>
                        Terminar
                    </button>
                </div>
                {finish && (
                    <ModalEndExam
                        minPts={topic.minScore}
                        setModal={setFinish}
                        exam={exam}
                    />
                )}
            </div>
        );
    }
}

export default Exam;
