import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logon.png';


import './Nav.css';
import BGNav from '../../assets/images/bg-banner2.png';

export default function Nav() {

    const navStyle = {
        backgroundImage: `url(${BGNav})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
    }
    return (
        <div className="Nav" style={navStyle}>
            <Link to="/">
                <div className="brand">
                <div className="brand">
                        <img src={logo} alt="Logo"/>
                    </div>
                    <span className="name">The Real Smell of Connect</span>
                </div>
            </Link>
        </div>
    );
}
