import React from "react";

import "./style.css"

import Logo from "../../assets/logo_header.png"

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt=" Logo KASA" />

            <nav className="menu">
                <a href="#"> Accueil </a>
                <a href="#"> A Propos </a>
            </nav>
        </div>
    )
}

export default Header;