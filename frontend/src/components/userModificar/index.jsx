import React, {useEffect, useState} from 'react';
import './style.css'
import {Link, useParams, useNavigate} from 'react-router-dom'
// import Select from 'react-select'
// import MySelect from './Select'
// import del from '../Delete'

function UserModificar(){
  const [Loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const {id}= useParams();
  const [user, setUser] = useState([]);
  let options=[
    {value:1, label:'Admin'},
    {value:2, label:'Miembro'}
  ]
  // const [rol, setRol]= useState([])
  async function del(){
    await fetch(`http://localhost:3000/user/${id}`, {
    method: 'DELETE'}
    ) 
    navigate('/admin');
}

  useEffect(() => {
    // async function fetchData(){
    //   await
       fetch(`http://localhost:3000/user/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data[0]))
      // .then(()=>{
      //   options = [
      //     {value:user.rol==1?1:2,label:user.rol==1?'Admin':'Miembro'},
      //     {value:user.rol==1?2:1,label:user.rol==1?'Miembro':'Admin'}
      //   ]
      // })
      .then(setLoading(false))
    // }
    //  fetchData()
    //  console.log(user)
      // setRol(user.rol.id)
    
  }, []);

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
         body: JSON.stringify({
          alias: e.target.alias.value,
          semestre: e.target.semestre.value,
          // rol: e.target.rol.value,
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
      {/* <select 
          value={user.rol?.id}
          id="rol" name="rol"
          className="input_type2 rol"
          // options={[{value:1, label:"Admin"},{value:2, label:"Miembro"}]}
          >
          <option value="2" >Miembro</option>
          <option value="1" >Admin</option>
        </select> */}
      {/* <label htmlFor="rol">Rol: */}
      {/* <>{ console.log(user.rol)}</> */}

        {/* <MySelect defaultValues={{ value: user.rol, label: user.rol==1?'Admin':'Miembro' }}/> */}
        {/* <Select 
          id="rol" name="rol"
          className="input_type2 rol"
          options={options}
          defaultValue={
            options[0]
          }
          /> */}
          {/* <option value="2" >Miembro</option>
          <option value="1" >Admin</option> 
        </select> */}
      {/* </label> */}
      <input type="button" className="danger_button" value="Desactivar usuario" 
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
    return (<><p>Cargando</p></>)
  }

}

export default UserModificar