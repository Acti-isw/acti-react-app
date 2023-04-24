import React from 'react'

const IndiceReprobacion = ({exams}) => {

  function getIndiceReprobacion(){
    let aprobacion = 0;  
    exams.forEach(element => {
        if(element.FinalResult){
            aprobacion++;
        }
    });
    aprobacion = Math.floor((aprobacion/(exams.length-1))*100)
    return aprobacion;
} 

  return (
    <p className="IAprobacion">Indice de aprobacion {getIndiceReprobacion()}%</p>
  )
}

export default IndiceReprobacion;