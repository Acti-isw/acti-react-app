import React from 'react';
import Login from './components/login';
import './App.css';
import Nav from './components/nav';
import Admin from './components/admin';
import Home from './components/home';
import CrearUsuario from './components/crearUsuario';
import NavigationBar from './components/navigationBar';
import UserDetails from './components/userDetails';
import UserModificar from './components/userModificar';
import Perfil from './components/perfil';
import CursoPage from './components/cursoPage';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Nav />
                <NavigationBar />
                <Routes>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/userdetails/:id" element={<UserDetails />} />
                    <Route path="/usermodify/:id" element={<UserModificar />} />
                    <Route path="/adduser" element={<CrearUsuario />} />
                    <Route path="/perfil" element={<Perfil />} />
                    <Route path="/curso" element={<CursoPage />} />
                    <Route path="/" element={<Home />} />
                </Routes>
                {/* <Home/> */}
            </Router>
        </React.Fragment>
    );
}

export default App;
