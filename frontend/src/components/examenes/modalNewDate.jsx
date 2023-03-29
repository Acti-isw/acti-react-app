import React from 'react';
import ExamService from '../../service/ExamService';
import FormBuilder from '../formBuilder';
import DateConverter from '../../utils/dateConverter';

function ModalNewDate({ examen, closeModal }) {
  const parts = DateConverter(examen.Date).split("-"); 
  const outputDateString = `${parts[2]}-${parts[1]}-${parts[0]}`;
    const formFields = [
        {
            name: 'fecha',
            label: 'Fecha',
            inputType: 'date',
            required: true,
            value:outputDateString
        }
    ];

    function throwAction(event) {
        const newDate = { Date: new Date(event.target.fecha.value) };
        // console.log(newDate);
        ExamService.updateExam(examen._id, newDate)
        closeModal()
    }

    const controls = ['Guardar', 'Cancelar'];
    return (
        <div className="modal-conteiner">
            <div className="modal">
                <FormBuilder
                    formTitle="Nueva fecha"
                    controls={controls}
                    inputs={formFields}
                    cancelAction={closeModal}
                    submitAction={throwAction}
                />
            </div>
        </div>
    );
}

export default ModalNewDate;
