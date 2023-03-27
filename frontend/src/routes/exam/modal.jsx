import { useContext } from 'react';
import { loggedUser } from '../../UserContext';
import userService from '../../service/UserService';
import { useNavigate } from 'react-router-dom';

function ModalEndExam({ minPts, setModal, exam }) {
    const { currentUser, setCurrentUserNewData } = useContext(loggedUser);
    const navigate = useNavigate();
    function onCancel(){
        setModal(false)
    }
    function onFinish(){
        currentUser.examenes.push(exam)
        userService.updateUser(currentUser.id, {examenes: currentUser.examenes})
        setCurrentUserNewData()
        navigate('/historialexamenes/'+currentUser.id)
        // sendExam({examenes: currentUser.examenes})
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
