import React, {useContext, useState} from 'react';
import './style.css';
import actiLogo from '../../assets/acti.png';
import LoginError from './LoginError'
import { loggedUser } from '../../UserContext';

function Login() {
    const {login} = useContext(loggedUser)
    const [onError, setError] = useState(false)
    const LogIn= (e)=>{
        e.preventDefault();
        login(e.target.id.value, e.target.password.value, setError)
 
    }
    return (
        <React.Fragment>
            <div className="login">
                <img className="actilogo" alt="logo" src={actiLogo} />
                <form className="loginForm" action="" onSubmit={LogIn}>
                <label htmlFor="id">
                    ID:
                    <input
                        className='input_type1'
                        type="number"
                        id="id"
                        name="input_id"
                    />
                   
                </label>
                <label htmlFor="password">
                    Contraseña:
                    <input
                        className="input_type1"
                        id="password"
                        type="password"
                    />
                </label>
                
                {onError &&  <LoginError/>}
                    <input
                        className="primary_button"
                        type="submit"
                        value="Iniciar sesión"
                    />
                </form>
            </div>
        </React.Fragment>
    );
}

export default Login;
