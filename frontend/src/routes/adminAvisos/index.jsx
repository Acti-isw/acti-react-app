import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Aviso from '../../components/aviso';
import AvisoService from '../../service/AvisoService';
import './style.css';
import Loader from '../../components/loader';

function AdminAvisos() {
    const [Avisos, setAvisos] = useState([]);
    const [loading, setLoading] = useState(true);

    function getId() {
        const newId = Avisos[Avisos.length - 1].id + 1;
        return newId;
    }

    function createAviso(e) {
        e.preventDefault();
        const id = getId();
        const data = {
            id: id,
            mensaje: e.target.mensaje.value,
            color: e.target.color.value,
            fechaDeExpiracion: e.target.expirationDate.value
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

    return (
        <div className="content">
            <p className="title">Avisos</p>
            <form className="addAviso" onSubmit={createAviso}>
                <p className="textMd">Mensaje:</p>
                <textarea
                    required
                    type="text"
                    className="input_type1 mensaje"
                    placeholder="Mensaje"
                    name="mensaje"
                    id="mensaje"
                />
                <label htmlFor="">
                    Color:
                    <input
                        required
                        type="color"
                        className="input_type1 color"
                        name="color"
                        id="color"
                    />
                </label>
                <label htmlFor="expirationDate">
                    Fecha de expiración:
                    <input
                        type="Date"
                        name="expirationDate"
                        id="expirationDate"
                        className="input_type1"
                    />
                </label>
                <button className="primary_button">Postear</button>
            </form>
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
