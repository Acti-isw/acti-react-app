import React, { useEffect, useState, useContext } from 'react';
import './style.css';
import { useParams, useNavigate, redirect } from 'react-router-dom';
import UserService from '../../service/UserService';
import Loader from '../../components/loader';
import FormBuilder from '../../components/formBuilder';
import RoleService from '../../service/RoleService';
import { loggedUser } from '../../UserContext';
// import ValidateAccess from '../../components/validateAccess';
import ValidateUser from '../../components/validateAccess/ValidateUser';

function UserModificar() {
    const [Loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [Datahorario, setDatahorario] = useState(undefined);
    const { currentUser } = useContext(loggedUser);
    const [rols, setRols] = useState();
    const [rol, setRol] = useState(undefined);

    useEffect(() => {
        // console.log(currentUser.id, id);
        if (currentUser.id == id || currentUser.rol.id === 1) {
            getusers();
            RoleService.getRoles().then((res) => {
                const rols = [];
                res.forEach((role) => {
                    rols.push({
                        nombre: role.nombre,
                        id: role.id
                    });
                });
                setRols(rols);
            });
        } else {
            navigate('/notallowed');
        }
    }, []);

    useEffect(() => {
        if (rols?.length > 0 && Datahorario != undefined && rol != undefined) {
            setLoading(false);
        }
    }, [rols, Datahorario, rol]);

    async function getusers() {
        await UserService.getUser(id)
            .then((res) => {
                setUser(res[0]);
                setRol(res[0].rol.id);
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
        // e.preventDefault();
        const data = {
            nombre: e.target.nombre.value,
            alias: e.target.alias.value,
            semestre: e.target.semestre.value,
            telefono: e.target.telefono.value,
            correo: e.target.correo.value,
            rol: e.target.rol?.value,
            infoActi: {
                IP: e.target.ip.value,
                Horario: JSON.stringify(Datahorario),
                Nivel: user?.infoActi.Nivel
            }
        };

        await UserService.updateUser(id, data);
        navigate(-1);
    };
    const formTitle = 'Modificar usuario';
    const controls = ['Aceptar', 'Cancelar'];
    const formFields = [
        {
            name: 'nombre',
            inputType: 'text',
            value: user.nombre || '',
            label: 'Nombre',
            required: true
        },
        {
            name: 'alias',
            label: 'Alias',
            inputType: 'text',
            value: user.alias || ''
        },
        {
            name: 'semestre',
            label: 'Semestre',
            inputType: 'number',
            value: user.semestre,
            required: true
        },
        {
            name: 'telefono',
            label: 'Telefono',
            inputType: 'number',
            value: user.telefono
        },
        {
            name: 'correo',
            label: 'Correo',
            inputType: 'email',
            value: user.correo
        },
        {
            name: 'subseccion',
            inputType: 'subSeccion',
            label: 'Informacion Acti'
        },
        {
            name: 'ip',
            label: 'IP',
            inputType: 'ip',
            placeholder: '10.21.44.00',
            value: user.infoActi?.IP || ''
        },
        {
            name: 'horario',
            label: 'Horario',
            inputType: 'schedule',
            Datahorario: Datahorario,
            setDatahorario: setDatahorario,
            mode: 1
        }
    ];

    if (currentUser.id != id && currentUser.rol.id == 1) {
        formFields.push({
            name: 'rol',
            label: 'Rol',
            inputType: 'select',
            options: rols,
            value: rol,
            required: true
        });
    }

    if (Loading) return <Loader />;

    return (
        <ValidateUser user={currentUser} id={id}>
            <div className="UserModificar content">
                <div className="UserUpdate__Form">
                    <FormBuilder
                        formTitle={formTitle}
                        controls={controls}
                        inputs={formFields}
                        cancelAction={() => {
                            navigate('/admin');
                        }}
                        submitAction={handleSubmit}
                    />
                </div>
                {currentUser.id != id && (
                    <input
                        type="button"
                        className="danger_button delete"
                        value="Desactivar usuario"
                        onClick={handleDelete}
                    />
                )}
            </div>
        </ValidateUser>
    );
}

export default UserModificar;
