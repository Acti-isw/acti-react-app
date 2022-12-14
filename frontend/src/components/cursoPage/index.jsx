import './style.css';
import Reto from '../reto'

function CursoPage() {
    return (
        <div className="cursoPage content">
            <p className="title">CSS avanzado</p>
            <div className="curso_themes">
                <p className="textMd">Temas</p>
                <p className="text">temas</p>
                <p className="text">mas temas</p>
                <p className="text">y mas temas</p>
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
            <Reto/>
            <div className="resources">
              <div className="resources_head">

              </div>
            </div>
        </div>
    );
}

export default CursoPage;
