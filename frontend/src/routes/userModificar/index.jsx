import React, { useEffect, useState, useContext } from 'react';
import './style.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Check from './check';
import UserService from '../../service/UserService';
// import HashLoader from 'react-spinners/HashLoader';
import Loader from '../../components/loader';
import Horario from '../../components/horario';
import { loggedUser } from '../../UserContext';

function UserModificar() {
    const [Loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [Datahorario, setDatahorario] = useState('');
    const { currentUser } = useContext(loggedUser);

    useEffect(() => {
        getusers();
    }, []);

    async function getusers() {
        await UserService.getUser(id)
        // console.log(id)
            .then((res) => {
                setUser(res[0]);
                setLoading(false);
                setDatahorario(JSON.parse(res[0].infoActi.Horario));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleDelete = async () => {
        await UserService.deleteUser(id);
        navigate('/admin');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            nombre: e.target.nombre.value,
            alias: e.target.alias.value,
            semestre: e.target.semestre.value,
            telefono: e.target.telefono.value,
            correo: e.target.correo.value,
            rol: e.target.rol.value,
            infoActi: {
                IP: e.target.ip.value,
                Horario: JSON.stringify(Datahorario)
            }
        };

        await UserService.updateUser(id, data);
        navigate(-1);
    };

    if (Loading) return <Loader />;

    return (
        <div className="UserModificar content">
            <p className="title">Modificar usuario</p>
            <form
                className="formModify"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <label htmlFor="nombre">
                    Nombre:
                    <input
                        id="nombre"
                        type="text"
                        className="input_type2"
                        defaultValue={user.nombre || ''}
                    />
                </label>
                <label htmlFor="alias">
                    Alias:
                    <input
                        id="alias"
                        type="text"
                        className="input_type2"
                        defaultValue={user.alias || ''}
                    />
                </label>
                <label htmlFor="semestre">
                    Semestre:
                    <input
                        id="semestre"
                        type="number"
                        className="input_type2"
                        defaultValue={user.semestre}
                    />
                </label>
                <label htmlFor="telefono">
                    Telefono:
                    <input
                        id="telefono"
                        type="number"
                        className="input_type2"
                        defaultValue={user.telefono}
                    />
                </label>
                <label htmlFor="correo">
                    Correo:
                    <input
                        id="correo"
                        type="email"
                        className="input_type2"
                        defaultValue={user.correo}
                    />
                </label>
                <h3>Informacion ACTI</h3>
                <label htmlFor="ip">
                    IP:
                    <input
                        id="ip"
                        type="text"
                        className="input_type2"
                        defaultValue={user.infoActi?.IP || ''}
                    />
                </label>

                <label htmlFor="">
                    Horario
                    <Horario
                        Datahorario={Datahorario}
                        setDatahorario={setDatahorario}
                        mode={1}
                    />
                    {/* <table className="horario">
                        <thead>
                            <tr>
                                <th>Horas</th>
                                <th>Lun</th>
                                <th>Mar</th>
                                <th>Mie</th>
                                <th>Ju</th>
                                <th>Vi</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table> */}
                </label>

                <Check id="rol" user={user} />
                {currentUser.id != id &&
                <input
                type="button"
                className="danger_button delete"
                value="Desactivar usuario"
                onClick={handleDelete}
                />
            }
                <div className="buttonsBox">
                    <input
                        id="submit"
                        type="submit"
                        className="primary_button"
                        // onClick={submit}
                        value={'Guardar'}
                    />
                    <Link to="/admin">
                        <button className="secondary_button">Cancelar</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default UserModificar;
