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
            alias: e.target.alias.value,
            semestre: e.target.semestre.value,
            rol: e.target.rol.value,
            infoActi: {
                IP: e.target.ip.value
            }
        };

        await UserService.updateUser(id, data);
        navigate('/admin');
    };

    // insert a better loading component
    if (Loading) return <HashLoader color={'#123abc'} size={350} />;

    return (
        <div className="UserModificar">
            <p className="title">Modificar usuario</p>
            <form
                className="formModify"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
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
