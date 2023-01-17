import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../service/UserService";
import ModalConfirmacion from "./modal";
import './style.css'

function ReactivarUsuario(){

  const [users, setUsers] = useState([]);
  const [Confirmacion, setConfirmacion] = useState([216566,'activar', 'yorch' ]);

  useEffect(()=>{
     UserService.getUsers()
     .then((res) => {
      setUsers(res.filter(user=>!user.activo));
      // console.log(users)
    })
    .then(()=>{
      console.log(users);
    }
  )
  .catch((err) => {
      console.log(err);
  });
  },[])

  function selectUser(user){
    // e.preventDefault();
    console.log(user);
    setConfirmacion()
  }

  return(
    <div className="content">
    <p className="title">Reactivar usuario</p>
    <table className="admin__table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Nivel</th>
          <th>‎ </th>
          <th>‎ </th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user)=>(
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.nivel}</td>
              <td>
                <Link to={`/userdetails/${user.id}`}>
                Detalles
                </Link>
              </td>
              <td onClick={()=>{selectUser(user)}}>
                <div className="turner">
                  <div className="turn"></div>
                  <p className="turn-text">Activar</p>
                </div>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
    {Confirmacion && <ModalConfirmacion info={Confirmacion} actualizador={setConfirmacion}/>}
    </div>
  )
}

export default ReactivarUsuario;