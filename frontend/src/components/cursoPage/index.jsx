import './style.css';
import Reto from '../reto';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TemaService from '../../service/TemaService';

function CursoPage() {
    const { id } = useParams();
    const [curso, setCurso] = useState([]);
    useEffect(() => {
        TemaService.getTopic(id)
            .then((res) => {
                setCurso(res[0]);
            })
            .catch((err) => {
                throw err;
            });
    }, []);

    return (
        <div className="cursoPage content">
            <p className="title">{curso.nombre}</p>
            <div className="curso_themes">
                <p className='textMd temas'>💡 **Temas:**</p>
                {curso.listadoConocimiento &&
                    curso.listadoConocimiento.map((tema) => (
                        <p key={tema} className="text">
                            {tema}
                        </p>
                    ))}
            </div>
            <h3>Instrucciones</h3>
            <p className="text">
                La pagina tiene que tener la estructura básica de HTML. Se le
                debe agregar un título a la página. Agregar icono a la página.
                Usar HTML semántico para cada pagina creada. Hacer uso de clases
                y darles nombres adecuados al tema. Los tamaños son a
                consideración, tratando de hacer que se vea similar a la imagen.
            </p>
            <h3>Retos</h3>
            <Reto />
            <div className="resources">
                <div className="resources_head"></div>
            </div>
        </div>
    );
}

export default CursoPage;
