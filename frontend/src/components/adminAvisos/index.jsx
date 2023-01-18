import React from 'react';
import './style.css';

function AdminAvisos() {
    return (
        <div className="content">
            <p className="title">Avisos</p>
            <div className="addAviso">
                <p className="textMd">Mensaje:</p>
                <textarea
                    type="text"
                    className="mensaje"
                    placeholder="Mensaje"
                />
                <label htmlFor="">
                  Color:
                    <input type="color" className="color" />
                </label>
                <label htmlFor="expirationDate">
                    Fecha de expiración:
                    <input type="Date" id="expirationDate" />
                </label>
                <button className="primary_button">Postear</button>
            </div>
            <div className="avisosList">
                <p className="textMd">Avisos actuales:</p>
            </div>
        </div>
    );
}

export default AdminAvisos;
