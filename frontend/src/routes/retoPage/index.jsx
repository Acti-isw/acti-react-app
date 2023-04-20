import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import './style.css';
import RetoService from '../../service/RetoService';
import { useParams } from 'react-router-dom';
import { recordPractice } from '../../components/reto/recordPractice';
import { loggedUser } from '../../UserContext';
// import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function RetoPage() {
    const [reto, setReto] = useState([]);
    const [done, setDone] = useState([]);
    const { currentUser, setCurrentUserNewData } = useContext(loggedUser);
    const { id } = useParams();

    function doNewRecord() {
        if (!done) {
            // confetti();
            recordPractice(currentUser, id, setCurrentUserNewData);
            setDone(true);
        }
    }

    useEffect(() => {
        RetoService.getReto(id)
            .then((res) => {
                setReto(res[0]);
            })
            .then(() => {
                const value = currentUser.practicas.find((practice) => practice === id)
                setDone(value!=undefined);
            })
            .catch((err) => {
                throw err;
            });
    }, []);

    return (
        <div className="content retopage">
            <p className="title retopage__title">{reto.nombre}</p>
            <div className="">{/* slide imagenes */}</div>
            <h3>Indicaciones: </h3>
            {/* indicaciones */}
            <p className="text">{reto.indicaciones}</p>
            <div className="complete__box">
                <p className="textMd">Completado</p>
                <input
                    type="checkbox"
                    onChange={doNewRecord}
                    checked={done}
                    disabled={done}
                />
            </div>
            <button className="primary_button recursos_button">
                Recursos
                <DownloadIcon />
            </button>
            <div className="guiasBox">
                <p className="guia__title">💡 **Guias**</p>
                {reto.guias?.map((guia) => {
                    <>
                        <p>{guia.nombre}: </p>
                        <a href={guia.enlace}>{guia.enlace}</a>
                    </>;
                })}
            </div>
        </div>
    );
}

export default RetoPage;
