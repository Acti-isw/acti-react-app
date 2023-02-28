import React, { useContext } from 'react';
import Login from './routes/login';
import './App.css';
import Nav from './components/nav';
import NavigationBar from './components/navigationBar';
import Admin from './routes/admin';
import Home from './routes/home';
import CrearUsuario from './routes/crearUsuario';
import ReactivarUsuario from './routes/reactivarUsuario';
import UserDetails from './components/userDetails';
import UserModificar from './routes/userModificar';
import Perfil from './routes/perfil';
import CursoPage from './routes/cursoPage';
import Recursos from './routes/recursos';
import AdminAvisos from './routes/adminAvisos';
import Recomendados from './routes/recomendados';
import AdminRecomendados from './routes/adminRecomendados';
import AdminRecursos from './routes/adminRecursos';
import RetoPage from './routes/retoPage';
import GestionarExamenes from './components/examenes/GestionarExamenes';
import HistorialExamanes from './components/examenes/HistorialExamenes';
('./components/examenes/GestionarExamenes');
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loggedUser } from './UserContext';

function App() {
    const { currentUser } = useContext(loggedUser);
    if (!currentUser) {
        return <Login />;
    } else {
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
                        <Route path="/retopage/:id" element={<RetoPage />} />
                        <Route path="/adduser" element={<CrearUsuario />} />
                        <Route
                            path="/gestionarexamenes/:id"
                            element={<GestionarExamenes />}
                        />
                        <Route
                            path="/historialexamenes/:id"
                            element={<HistorialExamanes />}
                        />
                        <Route
                            path="/reactivarusers"
                            element={<ReactivarUsuario />}
                        />
                        <Route path="/perfil" element={<Perfil />} />
                        <Route path="/curso/:id" element={<CursoPage />} />
                        <Route path="/adminavisos" element={<AdminAvisos />} />
                        <Route
                            path="/adminrecomendados"
                            element={<AdminRecomendados />}
                        />
                        <Route
                            path="/adminrecursos"
                            element={<AdminRecursos />}
                        />
                        <Route path="/recursos" element={<Recursos />} />
                        <Route
                            path="/recomendados"
                            element={<Recomendados />}
                        />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
