import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RecommendedService from '../../service/RecommendedService';

function Recomendacion(props) {
    const { recomendacion } = props;

    function openModal() {
        props.openModal(recomendacion);
    }
    function deleteRecomendacion() {
        RecommendedService.deleteRecommended(recomendacion._id);
        props.load(true);
    }
    function onClickRecomendacion(){
      if(!props.editable){
        window.open(recomendacion.enlace, '_blank');
      }
    }

    return (
        <div className="recomendacion-conteiner">
            {props.editable && (
                <div className="controles-conteiner">
                    <div className="controles">
                        <div className="iconEdit" onClick={openModal}>
                            <EditIcon className="icon" />
                        </div>
                        <div className="iconDelete">
                            <DeleteIcon
                                className="icon"
                                onClick={deleteRecomendacion}
                            />
                        </div>
                    </div>
                </div>
            )}
                <div
                    className={
                        props.editable
                            ? 'recomendacion editable'
                            : 'recomendacion'
                    }
                    onClick={onClickRecomendacion}
                >
                    <div className="recomendacion__enlace">
                        <h4>{props.recomendacion.enlace}</h4>
                    </div>
                    <h3 className="recomendacion__temas">
                        {props.recomendacion.titulo}
                    </h3>
                </div>
        </div>
    );
}

export default Recomendacion;
