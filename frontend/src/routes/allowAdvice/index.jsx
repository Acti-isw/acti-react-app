import './style.css';
import Block from '../../assets/block.svg';
import Error401 from '../../assets/error401.webp';

function NotAllowed() {
    return (
            <div className="content notallowed-conteiner">
                <div className="notallowed">
                    <h2>
                        No estas autorizado para acceder a esta direccion
                    </h2>
                    {/* <img src={Block} alt="" /> */}
                    <img className="bugCat" src={Error401} alt="" />
                </div>
            </div>
    );
}

export default NotAllowed;
