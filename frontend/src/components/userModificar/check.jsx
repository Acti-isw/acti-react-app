import React, { useState, useEffect } from 'react';

function Check(user) {
    // console.log("asi "+user.user.rol);
    const [rol, setRol] = useState(user?.user.rol);
    // useEffect(()=>{
    // console.log(setUser)
    // },[])

    function handleChange(event) {
        // console.log('cambio', rol, event.target.value);
        setRol(event.target.value);
        // console.log(rol);
    }

    if (rol != undefined) {
        return (
            <>
                <label htmlFor="rol">
                    Rol:
                    <select
                        id="rol"
                        className="input_type2"
                        value={rol}
                        onChange={handleChange}
                    >
                        <option value="1">Admin</option>
                        <option value="2">Miembro</option>
                    </select>
                </label>
            </>
        );
    } else {
        setTimeout(() => {
            // console.log('a');
            setRol(user?.user.rol);
        }, 100);
        return (
            <>
                <p>Cargando...</p>
            </>
        );
    }
}

export default Check;
