import React, {useEffect, useState} from 'react';
import './style.css'
import {Link, useParams} from 'react-router-dom'


function UserModificar(){
  const {id}= useParams();
  const [user, setUser] = useState([]);
  // const [rol, setRol] = useState(user.rol);

  useEffect(() => {
    async function fetchData(){
      await fetch(`http://localhost:3000/user/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data[0]))
    }

      fetchData()
    
  }, []);

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const json = {
      alias: e.target.alias.value || 'generico',
      semestre: e.target.semestre.value || 0,
      rol: e.target.rol.value || 1,
      infoActi: {
          IP: e.target.ip.value || '10.21.44.0',
      }
  }

  console.log(json)

    const response = await fetch(`http://localhost:3000/user/${id}`, {
      method: 'PATCH',
      headers: {
          'Content-type': 'application/json'
      },
       body: JSON.stringify({
        alias: e.target.alias.value,
        semestre: e.target.semestre.value,
        rol: e.target.rol.value,
        infoActi: {
            IP: e.target.ip.value,
        }
    })
  })
  const result = await response.json();
  console.log(result);
  navigate('/admin');
  }

  return(
    <div className='UserModificar'>
    <p className='title'>Modificar usuario</p>
    <form 
      // action="" 
      className='formModify'
      autoComplete="off"
      onSubmit={handleSubmit}
      >
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
      <select 
        value={user.rol?.id}
        id="rol" name="rol"
        className="input_type2 rol"
        options={[{value:1, label:"Admin"},{value:2, label:"Miembro"}]}
        />
        {/* <option value="2" >Miembro</option>
        <option value="1" >Admin</option> */}
      {/* </select> */}
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