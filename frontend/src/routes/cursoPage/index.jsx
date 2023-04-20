import './style.css';
import Reto from '../../components/reto';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import TemaService from '../../service/TemaService';
import RetoService from '../../service/RetoService';
import { loggedUser } from '../../UserContext';
import rataParty from '../../assets/RataParty.png';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function CursoPage(props) {
    const { id } = useParams();
    const [curso, setCurso] = useState([]);
    const [retos, setRetos] = useState([]);
    const { currentUser } = useContext(loggedUser);
    const [celebrate, setCelebrate] = useState(true);

    useEffect(() => {
        let celebrate = true;
        TemaService.getTopic(id)
            .then((res) => {
                setCurso(res[0]);
            })
            .catch((err) => {
                throw err;
            });
        RetoService.getRetosByTopic(id).then((res) => {
            res.map((challenge) => {
                let done = currentUser.practicas.find(
                    (practice) => practice === challenge._id
                );
                if (!done) {
                    celebrate = false;
                }
                challenge.done = done ? true : false;
            });
            setCelebrate(celebrate);
            setRetos(res);
        });
    }, [currentUser]);

    return (
        <div className="cursoPage content">
            <p className="title cursoPage__title">{curso.nombre}</p>
            <div className="curso_themes">
                <p className="textMd temas">💡 **Temas:**</p>
                <ul className='listadoConocimientos'>
                    {curso.listadoConocimiento &&
                        curso.listadoConocimiento.map((tema) => (
                            <li key={tema} className="text">
                                {tema}
                            </li>
                        ))}
                </ul>
            </div>
            <div className="cursoPage__instructions">
                <h3>Instrucciones</h3>
                <p className="text">
                    La pagina tiene que tener la estructura básica de HTML. Se
                    le debe agregar un título a la página. Agregar icono a la
                    página. Usar HTML semántico para cada pagina creada. Hacer
                    uso de clases y darles nombres adecuados al tema. Los
                    tamaños son a consideración, tratando de hacer que se vea
                    similar a la imagen.
                </p>
            </div>
            <div className="cursoPage__retos">
                <h3>Retos</h3>
                {celebrate && (
                    <div className="celebrate-conteiner">
                        <h3 className="partyText">
                            ¡Haz terminado todos los retos de este curso!
                        </h3>
                        <button className="btnParty" onClick={() => confetti()}>
                            <img src={rataParty} alt="" />
                        </button>
                    </div>
                )}
                <div className="retos__conteiner">
                    {retos.map((reto) => (
                        <Reto reto={reto} key={reto._id} />
                    ))}
                </div>
                <div className="resources">
                    <div className="resources_head"></div>
                </div>
            </div>
        </div>
    );
}

export default CursoPage;
