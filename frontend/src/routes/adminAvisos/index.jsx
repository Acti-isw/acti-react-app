import React from 'react';
import { useEffect, useState } from 'react';
import Aviso from '../../components/aviso';
import AvisoService from '../../service/AvisoService';
import Loader from '../../components/loader';
import FormBuilder from '../../components/formBuilder';
import './style.css';

function AdminAvisos() {
    const [Avisos, setAvisos] = useState([]);
    const [loading, setLoading] = useState(true);
    function getId() {
        const newId = Avisos[Avisos.length - 1].id + 1;
        return newId;
    }
    function createAviso(e) {
        const id = getId();
        const data = {
            id: id,
            mensaje: e.target.mensaje.value,
            color: e.target.color.value,
            fechaDeExpiracion: e.target.fechaDeExpiracion.value
        };
        AvisoService.CreateAnnonucement(data);
        setLoading(true);
    }
    useEffect(() => {
        AvisoService.getAnnonucement()
            .then((res) => {
                setAvisos(res);
            })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                throw err;
            });
    }, [loading]);
    if (loading) {
        return <Loader />;
    }
    const controls=['Agregar']
    const annonucementForm = [
        {
            name: 'mensaje',
            label: 'Mensaje',
            inputType: 'text',
            required: true,
            placeholder: 'Mensaje'
        },
        { 
            name: 'color',
            label:'Color',
            inputType: 'color',
            required: true,
        },
        {
            name: 'fechaDeExpiracion',
            label: 'Fecha de Expiracion',
            inputType: 'date',
            required: true,
        }
    ];
    const formTitle = 'Agregar aviso';
    return (
        <div className="content">
            <p className="title">Avisos</p>
            <FormBuilder inputs={annonucementForm} controls={controls} formTitle={formTitle} submitAction={createAviso}/>
            <div className="avisosList">
                <p className="textMd">Avisos actuales:</p>
                {Avisos.map((aviso) => (
                    <Aviso
                        key={aviso.id}
                        id={aviso.id}
                        text={aviso.mensaje}
                        color={aviso.color}
                        editable={true}
                        actualizador={setLoading}
                    />
                ))}
            </div>
        </div>
    );
}
export default AdminAvisos;
