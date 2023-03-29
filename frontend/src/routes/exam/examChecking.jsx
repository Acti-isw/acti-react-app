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
            // console.log(res);
        });
    }, []);

    function handleOnCheck(reactivo, value) {
        reactivo['result'] = value;
        console.log(exam);
    }

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
                  <Reactivo key={reactive._id} reactivo={reactive} mode={1} index={exam.reactives.indexOf(reactive) + 1} mark={handleOnCheck}/>
                ))}
                <div className="extraPoints-container">
                    <label htmlFor="ptsExtra">Añadir puntos extra</label>
                    <input type="number" className='inputPtsExtra' id="ptsExtra" name="ptsExtra"/>
                </div>
                <div className="note-container">
                    <label htmlFor="">Nota</label>
                    <textarea name="note" id="note" cols="30" rows="10" className="note"></textarea>
                </div>
                <div className="puntaje-container">
                    <p>Puntaje</p>
                </div>
                <h2 className="resultado"></h2>
                <button className="primary_button">Guardar</button>
            </div>
        );
    }
};

export default ExamChecking;
