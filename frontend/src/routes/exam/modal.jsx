function ModalEndExam({ minPts, pts, setModal }) {
    return (
        <div className="modalEndExam-Conteiner">
            <div className="modalEndExam">
                <p className="textMd modalHead">¿Seguro que quieres terminar?</p>
                <p className="textMd">
                    Con el conteo actual puedes obtener un puntaje maximo de
                    {pts} (minimo requerido {minPts})
                </p>
                <div className="buttonsBoxs">
                    <button className="primary_button">Aceptar</button>
                    <button className="secondary_button">Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default ModalEndExam;
