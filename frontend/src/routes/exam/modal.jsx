import { useNavigate } from 'react-router-dom';
import ExamService from '../../service/ExamService';

function ModalEndExam({ minPts, setModal, exam }) {
    const navigate = useNavigate();
    function onCancel(){
        setModal(false)
    }
    function onFinish(){
        ExamService.updateExam(exam._id,exam)
        navigate('/historial-examenes')
    }
    

    let pts = 0; 
    exam.reactives.forEach(element => {
        if(element.done){
            pts += element.valor
        }
    });

    return (
        <div className="modalEndExam-Conteiner">
            <div className="modalEndExam">
                <p className="textMd modalHead">¿Seguro que quieres terminar?</p>
                <p className="textMd">
                    Con el conteo actual puedes obtener un puntaje maximo de {pts} (minimo requerido {minPts})
                </p>
                <div className="buttonsBoxs">
                    <button className="primary_button" onClick={onFinish}>Aceptar</button>
                    <button className="secondary_button" onClick={onCancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default ModalEndExam;
