import React, { useEffect, useState } from 'react';
import ExamService from '../../service/ExamService';

const ExamenesAprobados = ({ idUser }) => {
    const [exams, setExams] = useState([]);

    useEffect(() => {
        ExamService.getExamByUser(idUser).then((res) => {
            const arraySort = res.sort((a, b) => {
                return new Date(b.Date) - new Date(a.Date);
            });
            setExams(arraySort);
        });
    }, []);

    function getIndiceReprobacion() {
        let aprobacion = 0;
        exams.forEach((element) => {
            if (element.FinalResult) {
                aprobacion++;
            }
        });
        return aprobacion;
    }
    function examsLength(){
      if(exams[0]?.reactives.length===0){
        return exams.length - 1;
      }
      else{
        return exams.length
      }
    }
    return (
        <div className="data">
            Examenes aprobados:
            <br /> {getIndiceReprobacion()} / {examsLength()}
        </div>
    );
};

export default ExamenesAprobados;
