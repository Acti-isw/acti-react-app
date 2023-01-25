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
import AdminRecursos from './components/adminRecursos';
import RetoPage from './components/retoPage';
import GestionarExamenes from './components/examenes/GestionarExamenes';
import HistorialExamanes from './components/examenes/HistorialExamenes'; './components/examenes/GestionarExamenes';
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
                            <Route
                                path="/retopage/:id"
                                element={<RetoPage/>}
                            />
                            <Route path="/adduser" element={<CrearUsuario />} />
                            <Route path="/gestionarexamenes" element={<GestionarExamenes/>} />
                            <Route path="/historialexamenes" element={<HistorialExamanes/>} />
                            <Route path="/reactivarusers" element={<ReactivarUsuario />} />
                            <Route path="/perfil" element={<Perfil />} />
                            <Route path="/curso/:id" element={<CursoPage />} />
                            <Route path="/adminavisos" element={<AdminAvisos />} />
                            <Route path="/adminrecomendados" element={<AdminRecomendados />} />
                            <Route path="/adminrecursos" element={<AdminRecursos />} />
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
