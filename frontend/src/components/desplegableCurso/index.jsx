import React from 'react'
import { useState } from 'react'
import Curso from '../curso'
import './style.css'

function DesplegableCurso(){
  return(
  <div>
    <div>
      <h2>Cursos básicos</h2>
      <img src="" alt="arrow" />
    </div>
    <div className='courses_list'>
        <Curso nameCurso="JS Básico"/>
    </div>
  </div>
  )
}

export default DesplegableCurso