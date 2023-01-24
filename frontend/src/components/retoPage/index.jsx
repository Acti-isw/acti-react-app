import React, { useEffect } from 'react';
import { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import './style.css';
import RetoService from '../../service/RetoService';
import { useParams } from 'react-router-dom';

function RetoPage() {
    const [reto, setReto] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        RetoService.getReto(id)
            .then((res) => {
                setReto(res[0]);
            })
            .catch((err) => {
                throw err;
            });
    }, []);

    return (
        <div className="content retopage">
            <p className="title">{reto.nombre}</p>
            <div className="">{/* slide imagenes */}</div>
            <h3>Indicaciones: </h3>
            {/* indicaciones */}
            <p className="text">{reto.indicaciones}</p>
            <div className="complete__box">
                <p className="textMd">Completado</p>
                <input type="checkbox" />
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
