import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import './style.css';
import RetoService from '../../service/RetoService';
import { Link, useParams } from 'react-router-dom';
import { recordPractice } from '../../components/reto/recordPractice';
import { loggedUser } from '../../UserContext';
import ReactMarkdown from 'react-markdown';

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
                console.log(res[0]);
            })
            .then(() => {
                const value = currentUser.practicas.find(
                    (practice) => practice === id
                );
                setDone(value != undefined);
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
            <div className="indicaciones">
                <ReactMarkdown>{reto.indicaciones}</ReactMarkdown>
            </div>
            {reto?.imagenes?.map((img) => (
                <img src={img} alt="" key={img} />
            ))}
            <div className="complete__box">
                <p className="textMd">Completado</p>
                <input
                    type="checkbox"
                    onChange={doNewRecord}
                    checked={done}
                    disabled={done}
                />
            </div>
            {reto?.recursos!='' && 
                <a href={reto.recursos} target="_blank">
                    <button className="primary_button recursos_button">
                        Recursos
                        <DownloadIcon />
                    </button>
                </a>
            }
            <div className="guiasBox">
                <p className="guia__title">💡 **Guias**</p>
                {reto.guias?.map((guia) => (
                    <a href={guia} target="_blank" key={guia}>
                        {guia}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default RetoPage;
