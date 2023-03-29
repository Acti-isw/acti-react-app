import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader';
import ExamService from '../../service/ExamService';
import UserService from '../../service/UserService';
import Reactivo from './reactivo';
import './style.css'

const ExamChecking = () => {
    const { idExam } = useParams();
    const [exam, setExam] = useState();
    const [user, setUser] = useState();

    useEffect(() => {
        ExamService.getExamById(idExam).then((res) => {
            // console.log(res);
            setExam(res);
            UserService.getUser(res.user).then((user) => {
              setUser(user[0]);
            })
        });
    }, []);

    if (!exam || !user) {
        return <Loader />;
    } else {
        return (
            <div className="content exam">
                <p className="title">Revisar examen</p>
                <div className="data_exam">
                    <h3>{exam.topic.nombre}</h3>
                    <h2>{user.alias}</h2>
                    {!exam.over && <p className='textMd redText'>Enviado fuera de tiempo</p>}
                </div>
                <p className='textMd'>Puntos necesarios: {exam.topic.minScore}</p>
                {exam.reactives.map((reactive)=>(
                  <Reactivo key={reactive._id} reactivo={reactive} mode={1} index={exam.reactives.indexOf(reactive) + 1}/>
                ))}
            </div>
        );
    }
};

export default ExamChecking;
