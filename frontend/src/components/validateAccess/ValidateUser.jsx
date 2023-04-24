import React from 'react';
import NotAllowed from '../../routes/allowAdvice';

const ValidateUser = ({ user, id, children }) => {
    if (user.id == id || user.rol.id == 1) {
        return children;
    } else {
        return <NotAllowed/>;
    }
};

export default ValidateUser;
