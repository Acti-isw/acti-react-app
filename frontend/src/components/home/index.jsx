import React from 'react';
import './style.css'
import Aviso from '../aviso'
import DesplegableCurso from '../desplegableCurso';

function Home(){
  return(
    <div>
      <header>
        <h1>ACTI</h1>
        <p className='text'>
          Centro de asesoria y consultoria en tecnologias de informacion
        </p>
        <div className='avisosBox'>
          <Aviso
            text='Aviso que avisa muy avisador'
            color='green'
          />
        </div>
          <Aviso
            text='Siguiente examen: 10 días'
            color='var(--danger)'
          />
      </header>
      <main>
          <DesplegableCurso/>
      </main>
      
    </div>
  )
}

export default Home