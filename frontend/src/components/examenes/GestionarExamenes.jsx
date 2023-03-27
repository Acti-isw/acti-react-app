import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TemaService from '../../service/TemaService';
import UserService from '../../service/UserService';
import Loader from '../loader';
import DateConverter from '../../utils/dateConverter';
import './style.css';

function GestionarExamenes() {
    const { id } = useParams();
    const [user, setUser] = useState();
    const [topics, setTopics] = useState();
    
    useEffect(() => {
        UserService.getUser(id).then((res) => {
            setUser(res[0]);
        });
        TemaService.getTopics().then((res)=>{
            setTopics(res);
        })
    }, []);

    if(user===undefined || topics===undefined){
        return <Loader/>
    }else{
        return (
            <div className="content gestionExamenes">
                {console.log(topics)}
                {!user.exam && <p className='title'>Programar Examen</p>}
                <h3 className="">{user.alias}</h3>
                {user.exam && (
                    <p className="textMd">
                        Siguiente examen: <br />
                        10/12/2023
                    </p>
                )}
                <p className="textMd">Tema: JS arreglos</p>
                <button className="primary_button">Cambiar fecha</button>
                <p className="IReprobacion">Indice de reprobacion</p>
                <p className="textMd">Historial de examenes</p>
                <table className="examenes__table ">
                    <thead>
                        <tr>
                            <th>Tema</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.examenes.map((examRow)=>(
                            <tr className="examenes__tr" key={examRow._id}>
                            <td>
                                <p>{topics.find(top => top.id ===examRow.topic).nombre}</p>
                            </td>
                            <td>
                                <p>{DateConverter(examRow.Date)}</p>
                            </td>
                            <td>
                                {!examRow.FinalScore && <p className="estado pendiente">Pendiente</p> }
                                {examRow.FinalResult ===false &&  <p className="estado reprobado">Reprobado</p> }
                                {examRow.FinalResult ===true && <p className="estado aprobado">Aprobado</p> }
                                {/* <p className="estado pendiente">Pendiente</p> */}
                            </td>
                        </tr>
                        ))}
{/*                         
                        <tr className="examenes__tr">
                            <td>
                                <p>JS Básico</p>
                            </td>
                            <td>
                                <p>10/12/2023</p>
                            </td>
                            <td>
                                <p className="estado aprobado">Aprobado</p>
                            </td>
                        </tr>
                        <tr className="examenes__tr">
                            <td>
                                <p>JS Básico</p>
                            </td>
                            <td>
                                <p>10/12/2023</p>
                            </td>
                            <td>
                                <p className="estado reprobado">Reprobado</p>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        );

    }

}

export default GestionarExamenes;
