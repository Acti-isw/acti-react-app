import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import reactiveService from '../../service/reactiveService';
import ReactMarkdown from 'react-markdown';
import TemaService from '../../service/TemaService';
import Timer from '../../components/timer';
import './style.css';
import Loader from '../../components/loader';
import ModalEndExam from './modal';
// import prueba from './pruebaMd.md'

function Exam() {
    const { tema } = useParams();
    const [reactivos, setReactivos] = useState();
    const [topic, setTopic] = useState();
    const [Loading, setLoading] = useState(true);
    // const [examInfo, setExamInfo] = useState();

    useEffect(() => {
        TemaService.getTopic(tema).then((res) => {
            setTopic(res[0]);
            // console.log(res[0]);
        });
        reactiveService.getReactivesExam(tema).then((res) => {
            setReactivos(res);
        });
    }, []);

    useEffect(() => {
        if (topic != undefined && reactivos != undefined) {
            setLoading(false);
        }
    }, [topic, reactivos]);

    if (Loading) {
        return <Loader />;
    } else {
        return (
            <div className="content exam">
                {topic && <p className="title">Examen {topic?.nombre}</p>}
                {!topic && <p className="title">Examen Loading...</p>}
                <div className="examHeader">
                    <Timer initHours={parseInt(topic?.timeExam)} />
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
                {reactivos &&
                    reactivos.map((reactivo) => (
                        <div className="reative-conteiner" key={reactivo._id}>
                            <h3 className="head-reactive">
                                Reactivo #{reactivos.indexOf(reactivo) + 1}.{' '}
                                <span className="pts">
                                    Valor {reactivo.valor}pts
                                </span>
                            </h3>
                            <ReactMarkdown>
                                {reactivo.markdown}
                                {/* {parse(reactivo.markdown)} */}
                            </ReactMarkdown>
                            <div className="done-conteiner">
                                <label htmlFor="done" className="lblDone">
                                    Hecho:
                                </label>
                                <input
                                    type="checkbox"
                                    value="done"
                                    id="done"
                                    className="inputDone"
                                />
                            </div>
                        </div>
                    ))}
                <div className="btn-conteiner">
                    <button className="primary_button">Terminar</button>
                </div>
                <ModalEndExam pts={1} minPts={topic.minScore}/>
            </div>
        );
    }
}

export default Exam;
