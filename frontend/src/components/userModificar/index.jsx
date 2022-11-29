import React, {useEffect, useState} from 'react';
import './style.css'
import {Link, useParams, useNavigate} from 'react-router-dom'
import Select from 'react-select'
import Check from './check'
// import del from '../Delete'

function UserModificar(){
  const [Loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const {id}= useParams();
  const [user, setUser] = useState([]);
  // const [rol, setRol] = useState([])

  async function del(){
    await fetch(`http://localhost:3000/user/${id}`, {
    method: 'DELETE'}
    ) 
    navigate('/admin');
}

  useEffect(() => {
    // async function fetchData(){
    //   await
    // setTimeout(()=>{
      fetch(`http://localhost:3000/user/${id}`)
      .then((response) =>{ return response.json()})
      .then((data) => {setUser(data[0])})
      // .then(()=>{console.log(user)})
      // .then(()=>{setRol(user?.rol)})
      .then(setLoading(false))
    // },2000)

    // }
    //  fetchData()
    //  console.log(user)
      // setRol(user.rol.id)
    
  }, []);

  const handleSubmit = async (e)=>{
    e.preventDefault();

    console.log(e.target)
    try {
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
    } catch (error) {
      console.log(error)
    }
  
    navigate('/admin');
  }



  if(Loading==false){
    return(
      <div className='UserModificar'>
      <p className='title'>Modificar usuario</p>
      <form 
        // action="" 
        className='formModify'
        autoComplete="off"
        onSubmit={handleSubmit}
        >
          {/* <>{console.log(user)}</> */}
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

      <Check id="rol" user={user} />

      <input type="button" className="danger_button delete" value="Desactivar usuario" 
      onClick={del}/>
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

  }else{
    return (<><p className="cargando">Cargando</p></>)
  }

}

export default UserModificar