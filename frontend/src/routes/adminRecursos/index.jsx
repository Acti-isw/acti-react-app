import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ResourceService from '../../service/ResourceService';
import Recurso from '../../routes/recursos/recurso';
import FormResource from './formResource';
import Loader from '../../components/loader';
import './style.css';

function AdminRecursos() {
    const [editResourceModal, setEditResourceModal] = useState(false);
    const [resources, getResources] = useState([]);
    const [load, getLoad] = useState(true);

    useEffect(() => {
        ResourceService.getResources()
            .then((res) => {
                getResources(res);
            })
            .catch((err) => {
                throw err;
            });
        getLoad(false);
    }, [load]);

    if (load) {
        return <Loader />;
    } else {
        return (
            <div className="adminRecursos content">
                <p className="title">Gestionar recursos</p>
                <div className="addRecurso">
                    {/* <h3>Agregar recurso:</h3> */}
                    <FormResource action={'create'} load={getLoad} formTitle={'Agregar recurso'}/>
                </div>
                <div className="recusosActuales">
                    <h2>Recursos actuales</h2>
                    {resources.map((recurso) => (
                        <Recurso
                            recurso={recurso}
                            key={recurso._id}
                            editable={true}
                            load={getLoad}
                            edit={setEditResourceModal}
                        />
                    ))}
                </div>
                {editResourceModal && (
                    <div className="modalEditResource-conteiner">
                        <div className="modalEditResource">
                            <FormResource action={'update'} load={getLoad} resource={editResourceModal} closeModal={setEditResourceModal} formTitle={'Editar recurso'}/>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default AdminRecursos;
