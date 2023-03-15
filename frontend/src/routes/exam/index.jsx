import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import reactiveService from '../../service/reactiveService';
import ReactMarkdown from 'react-markdown';
import TemaService from '../../service/TemaService';
import Timer from '../../components/timer';

function Exam() {
    const { tema } = useParams();
    const [reactivos, setReactivos] = useState();
    const [topic, setTopic] = useState();

    useEffect(() => {
        TemaService.getTopic(tema).then((res) => {
            setTopic(res[0]);
        });
        reactiveService.getReactivesExam(tema).then((res) => {
            setReactivos(res);
        });
    },[]);

    return (
        <div className="content">
            {topic && <p className="title">Examen {topic?.nombre}</p>}
            {!topic && <p className="title">Examen Loading...</p>}
            <Timer initHours={1} initMinutes={30}/>
            {reactivos &&
                reactivos.map((reactivo) => (
                    <div key={reactivo._id}>
                        <ReactMarkdown>{reactivo.markdown}</ReactMarkdown>
                    </div>
                ))}
        </div>
    );
}

export default Exam;
