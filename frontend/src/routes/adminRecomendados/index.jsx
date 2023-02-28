import Recomendacion from '../../components/recomendacion';
import FormRecomendado from './formRecomendado';
import React, { useEffect, useState } from 'react';
import RecommendedService from '../../service/RecommendedService';
import './style.css';
import Loader from '../../components/loader';

function AdminRecomendados() {
    const [recomendaciones, setRecomendaciones] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        RecommendedService.getRecommended().then((res) => {
            setRecomendaciones(res);
        });
        setLoading(false);
    }, [loading]);

    if (loading) {
        return <Loader />;
    } else {
        return (
            <div className="content adminRecomendados">
                <p className="title">Gestionar recomendados</p>
                <div className="addrecomendacion">
                    <h3>Agregar recomendacion</h3>
                    <FormRecomendado action="add" load={setLoading} />
                </div>
                <div className="recomendadosList">
                    <h2>Recomendados actuales</h2>
                    {recomendaciones.map((recomendacion) => (
                        <Recomendacion
                            editable={true}
                            openModal={setOpenModal}
                            recomendacion={recomendacion}
                            key={recomendacion._id}
                            load={setLoading}
                        />
                    ))}
                </div>
                {openModal && (
                    <div className="modal__editRecommended_conteiner">
                        <div className="modal__editRecommended">
                            <h3>Editar recomendacion</h3>
                            <FormRecomendado
                                action="edit"
                                recomendacion={openModal}
                                recomendacionModal={setOpenModal}
                                load={setLoading}
                            />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default AdminRecomendados;
