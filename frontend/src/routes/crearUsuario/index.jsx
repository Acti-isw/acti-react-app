import React, { useEffect, useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import UserService from '../../service/UserService';
import RoleService from '../../service/RoleService';
import FormBuilder from '../../components/formBuilder';
import Loader from '../../components/loader';

function CrearUsuario() {
    const navigate = useNavigate();
    const [rols, setRols] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        RoleService.getRoles().then((res) => {
            const rols = [];
            res.forEach((role) => {
                rols.push({
                    nombre: role.name,
                    id: role.id
                });
            });
            setRols(rols);
        });
    }, []);
    useEffect(() => {
        if (rols?.length > 0) {
            setLoading(false);
        }
    }, [rols]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target);
        const data = {
            nombre: e.target.nombre.value,
            id: e.target.id.value,
            contraseña: e.target.contraseña.value,
            alias: e.target.alias.value,
            semestre: e.target.semestre.value,
            telefono: e.target.telefono.value,
            activo: true,
            correo: e.target.correo.value,
            intentos: 0,
            examenes: [],
            rol: e.target.rol.value,
            infoActi: {
                IP: e.target.ip.value,
                Nivel: 0,
                Especialidad: 'Ninguna'
                // Horario: '[]'
            }
        };
        UserService.createUser(data);
        navigate('/admin');
    };
    function onCancel() {
        navigate('/admin');
    }
    const formTitle = 'Crear nuevo usuario';
    const controls = ['Guardar', 'Cancelar'];
    const formCreateUser = [
        {
            name: 'nombre',
            inputType: 'text',
            label: 'Nombre',
            required: true,
            placeholder: 'Nombre usuario'
        },
        {
            name: 'id',
            inputType: 'number',
            label: 'ID',
            required: true,
            placeholder: 'Ingrese ID sin ceros'
        },
        {
            name: 'semestre',
            inputType: 'number',
            label: 'Semestre',
            required: true,
            placeholder: 'Ingresa el semestre'
        },
        {
            name: 'alias',
            inputType: 'text',
            label: 'Alias',
            required: true,
            placeholder: 'Ingresa el alias del usuario'
        },
        {
            name: 'contraseña',
            inputType: 'password',
            label: 'Contraseña predeterminada',
            required: true
        },
        {
            name: 'telefono',
            inputType: 'number',
            label: 'Telefono'
        },
        {
            name: 'correo',
            inputType: 'email',
            label: 'Correo',
            placeholder: 'ejemplo@potros.itson.edu.mx'
        },
        {
            name: 'subseccion',
            inputType: 'subSeccion',
            label: 'Informacion Acti'
        },
        {
            name: 'ip',
            inputType: 'text',
            label: 'IP',
            placeholder: '21.21.44.00'
        },
        {
            name: 'rol',
            inputType: 'select',
            label: 'Rol',
            options: rols
        }
    ];
    if (loading) {
        return <Loader />;
    } else {
        return (
            <div className="content crearUsuario">
                <FormBuilder
                    inputs={formCreateUser}
                    controls={controls}
                    cancelAction={onCancel}
                    submitAction={handleSubmit}
                    formTitle={formTitle}
                />
            </div>
        );
    }
}

export default CrearUsuario;
