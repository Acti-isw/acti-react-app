import React from 'react'
import './style.css'

function Aviso(props){
  const {color}= props;
  const backgroundColor = {
    "backgroundColor": color
  }
  return(
  <div className='aviso'  style={backgroundColor}>
    <p>
      {props.text}
    </p>
  </div>
  )
}

export default Aviso