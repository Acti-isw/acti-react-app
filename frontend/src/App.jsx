import React, {useContext} from 'react';
import Login from './components/login';
import './App.css';
import Nav from './components/nav';
import Admin from './components/admin';
import Home from './components/home';
import CrearUsuario from './components/crearUsuario';
import ReactivarUsuario from './components/reactivarUsuario';
import NavigationBar from './components/navigationBar';
import UserDetails from './components/userDetails';
import UserModificar from './components/userModificar';
import Perfil from './components/perfil';
import CursoPage from './components/cursoPage';
import Recursos from './components/recursos';
import AdminAvisos from './components/adminAvisos';
import Recomendados from './components/recomendados';
import AdminRecomendados from './components/adminRecomendados';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loggedUser } from './UserContext';

function App() {
    const {currentUser} = useContext(loggedUser)
    if(!currentUser) {
        return <Login/>
    }else{
        return (
            <React.Fragment>
                    <Router>
                        <Nav />
                        <NavigationBar />
                        <Routes>
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/login/*" element={<Login />} />
                            <Route
                                path="/userdetails/:id"
                                element={<UserDetails />}
                            />
                            <Route
                                path="/usermodify/:id"
                                element={<UserModificar />}
                            />
                            <Route path="/adduser" element={<CrearUsuario />} />
                            <Route path="/reactivarusers" element={<ReactivarUsuario />} />
                            <Route path="/perfil" element={<Perfil />} />
                            <Route path="/curso" element={<CursoPage />} />
                            <Route path="/adminavisos" element={<AdminAvisos />} />
                            <Route path="/adminrecomendados" element={<AdminRecomendados />} />
                            <Route path="/recursos" element={<Recursos />} />
                            <Route path="/recomendados" element={<Recomendados />} />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </Router>
            </React.Fragment>
        );
    }

}

export default App;
