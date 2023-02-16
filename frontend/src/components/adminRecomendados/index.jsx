import Recomendacion from '../recomendados/recomendacion';
import FormRecomendados from './formRecomendados';
import React, { useEffect, useState } from 'react';
import RecommendedService from '../../service/RecommendedService';
import './style.css';

function AdminRecomendados() {
    const [recomendaciones, setRecomendaciones] = useState([]);
    useEffect(() => {
        RecommendedService.getRecommended()
        .then((res)=>{
          setRecomendaciones(res);
        })
    }, []);


    return (
        <div className="content adminRecomendados">
            <p className="title">Gestionar recomendados</p>
            <div className="addrecomendacion">
                <h3>Agregar recomendacion</h3>
                <FormRecomendados action='edit'/>
            </div>
            <div className="recomendadosList">
                <h2>Recomendados actuales</h2>
                {recomendaciones.map((recomendacion) => (
                    <Recomendacion
                        editable={true}
                        recomendacion={recomendacion}
                        key={recomendacion._id}
                    />
                ))}
            </div>
            <div className="modal__editRecommended_conteiner">
              <div className="modal__editRecommended">
                <h3>Editar recomendacion</h3>
              <FormRecomendados action='edit'/>
              </div>
            </div>
        </div>
    );
}

export default AdminRecomendados;
