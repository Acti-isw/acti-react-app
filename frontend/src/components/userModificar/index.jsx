import React, {useEffect, useState} from 'react';
import './style.css'
import {Link, useParams} from 'react-router-dom'


function UserModificar(){
  const {id}= useParams();
  const [user, setUser] = useState([]);
  const [rol, setRol] = useState(user.rol);

  useEffect(() => {
    async function fetchData(){
      await fetch(`http://localhost:3000/user/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data[0]))
    }

    // setTimeout(()=>{
      fetchData()
    // },1000)
    
  }, []);

  return(
    <div className='UserModificar'>
    <p className='title'>Modificar usuario</p>
    <form action="">
    <label htmlFor="alias">
      Alias: 
      <input 
      id="alias"
      type="text"
      className='input_type2'
      defaultValue={user.alias || ''}
      // onChange = {handleChange}
    />
    </label>
    <label htmlFor="semestre">
      Semestre: 
      <input id="semestre" type="number" className='input_type2' defaultValue={user.semestre}/>
    </label>
    <h3>Informacion ACTI</h3>
    <label htmlFor="ip">
      IP: 
      <input id="ip" type="text" className='input_type2' defaultValue={user.infoActi?.IP || ''}/>
    </label>
    <label htmlFor="rol">Rol:
      <select value={user.rol?.name} id="rol" className="input_type2 rol">
        <option value="Miembro" >Miembro</option>
        <option value="Admin" >Admin</option>
      </select>
    </label>
    <button className="danger_button">Desactivar usuario</button>
    <div className="buttonsBox">
    <input 
          id="submit"
          type="submit"
          className="primary_button"
          // onClick={submit}
          value={'Guardar'}
        />
        <Link to='/admin'>
          <button 
          className="secondary_button"
          >
            Cancelar</button>
        </Link>
    </div>
    </form>
    </div>
  )
}

export default UserModificar