import React, { useEffect, useState } from 'react';
import './style.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Check from './check';
import UserService from '../../service/UserService';
import HashLoader from 'react-spinners/HashLoader';

function UserModificar() {
    const [Loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        UserService.getUser(id)
            .then((res) => {
                setUser(res[0]);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                IP: e.target.ip.value
            }
        };

        await UserService.updateUser(id, data);
        navigate('/admin');
    };

    // insert a better loading component
    if (Loading) return <div className='loading'><HashLoader color={'#292d38'} size={200} /></div>;

    return (
        <div className="UserModificar">
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

                <Check id="rol" user={user} />

                <input
                    type="button"
                    className="danger_button delete"
                    value="Desactivar usuario"
                    onClick={handleDelete}
                />
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
