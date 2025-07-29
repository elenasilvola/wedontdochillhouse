import React from 'react';
import {ReactComponent as Logo} from '../assets/logo.svg';
import {ReactComponent as LogoMobile} from '../assets/logo-mobile.svg';


const Navbar =  ( {toggleGenre} ) => {

    return (
        <nav className="navbar">
            <div className="logo">
                <div className="logo-desktop">
                    <Logo /></div>  
                <div className="logo-mobile">
                    <LogoMobile /></div>  
            </div>     
            <div className="heading">
            <a href="/" className="site-title">WE DON'T DO CHILL HOUSE</a>
                <div className="nav-links">
                    <button onClick={toggleGenre}>GENRE</button>
                    <button></button>
                </div>
            </div> 
        </nav> 
    );
}

export default Navbar;