import React, { useState, useMemo, useEffect } from 'react';
import UserService from './service/UserService';

// function CurrentUserData(props){
const loggedUser = React.createContext();

function UserContext(props) {
    const localSesion = localStorage.getItem('localSesion');
    if (!localSesion) {
        localStorage.setItem('localSesion', JSON.stringify(''));
    }
    useEffect(() => {
        if (localSesion) {
            setCurrentUser(JSON.parse(localSesion));
        }
    }, []);
    const [currentUser, setCurrentUser] = useState();
    const login = (id, contraseña, setError) => {
        UserService.getUser(id).then((res) => {
            if (!res[0] || res[0].contraseña != contraseña) {
                setError(true);
            } else {
                setError(false);
                localStorage.setItem('localSesion', JSON.stringify(res[0]));
                setCurrentUser(res[0]);
            }
        });
    };
    const logout = () => {
        localStorage.setItem('localSesion', JSON.stringify(''));
        setCurrentUser(null);
    };

    const setCurrentUserNewData = async ()=>{
        await UserService.getUser(currentUser.id).then((res) => {
                localStorage.setItem('localSesion', JSON.stringify(res[0]));
                setCurrentUser(res[0]);
        });
    }

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
