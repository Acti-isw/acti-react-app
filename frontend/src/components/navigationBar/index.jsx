import React from 'react';
import { Link } from 'react-router-dom';
import favorites_Icon from '../../assets/favorites_icon.svg';
import home_icon from '../../assets/home_icon.svg';
import resources_icon from '../../assets/resources_icon.svg';
import './style.css';

function NavigationBar() {
    return (
        <div className="NavigationBar">
            <Link to='/recomendados'>
                <img src={favorites_Icon} alt="" />
            </Link>
            <Link to='/'>
                <img src={home_icon} alt="" />
            </Link>
            <Link to="/recursos">
                <img src={resources_icon} alt="" />
            </Link>
        </div>
    );
}

export default NavigationBar;
