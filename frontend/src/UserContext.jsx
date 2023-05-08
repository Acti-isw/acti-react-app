import React, { useState, useMemo, useEffect } from 'react';
import UserService from './service/UserService';

// function CurrentUserData(props){
const loggedUser = React.createContext();

function UserContext(props) {
    const localSesion = sessionStorage.getItem('localSesion');
    if (!localSesion) {
        sessionStorage.setItem('localSesion', JSON.stringify(''));
    }
    useEffect(() => {
        if (localSesion) {
            // console.log(JSON.parse(localSesion));
            const id = JSON.parse(localSesion).id;
            const contraseña = JSON.parse(localSesion).contraseña;
            autoLogin(id, contraseña);
        }
    }, []);
    const [currentUser, setCurrentUser] = useState();
    const autoLogin = (id, contraseña) => {
        UserService.getUser(id).then((res) => {
            if (!res[0] || res[0].contraseña != contraseña) {
                setCurrentUser(undefined);
            } else {
                const localUser = {
                    id: res[0].id,
                    contraseña: res[0].contraseña
                };
                sessionStorage.setItem('localSesion', JSON.stringify(localUser));
                setCurrentUser(res[0]);
            }
        });
    };
    const login = (id, contraseña, setError) => {
        UserService.getUser(id).then((res) => {
            if (!res[0] || res[0].contraseña != contraseña) {
                setError(true);
            } else {
                setError(false);
                const localUser = {
                    id: res[0].id,
                    contraseña: res[0].contraseña
                };
                sessionStorage.setItem('localSesion', JSON.stringify(localUser));
                setCurrentUser(res[0]);
            }
        });
    };
    const logout = () => {
        sessionStorage.setItem('localSesion', JSON.stringify(''));
        setCurrentUser(null);
    };

    const setCurrentUserNewData = async () => {
        await UserService.getUser(currentUser.id).then((res) => {
            // sessionStorage.setItem('localSesion', JSON.stringify(res[0]));
            setCurrentUser(res[0]);
        });
    };

    const value = useMemo(() => {
        return {
            currentUser,
            login,
            logout,
            setCurrentUserNewData
        };
    }, [currentUser]);

    return (
        <loggedUser.Provider value={value} {...props}>
            {props.children}
        </loggedUser.Provider>
    );
}

export { UserContext, loggedUser };
