import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../../service/UserService';
import './style.css';

function GestionarExamenes() {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    // const [nextExam, setNextExam] = useState('');
    useEffect(() => {
        UserService.getUser(id).then((res) => {
            setUser(res[0]);
        });
    }, []);

    function getNextExam() {
        return user.examenes.filter(examen=>examen.resultadoPreliminar === null)
    }

    return (
        <div className="content gestionExamenes">
            <h3 className="">{user.alias}</h3>
            {!user.exam && <p>Programar Examen</p>}
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
                    <tr className="examenes__tr">
                        <td>
                            <p>JS Básico</p>
                        </td>
                        <td>
                            <p>10/12/2023</p>
                        </td>
                        <td>
                            <p className="estado pendiente">Pendiente</p>
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
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GestionarExamenes;
