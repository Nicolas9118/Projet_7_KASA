import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css"

import Logo from "../../assets/logo_header.png"

const Header = ({path}) => {
    /* Si je suis sur la page "/"  =>  avoir les classes home / underHome et About 
    Si je suis sur la page "/About"  =>  avoir les classes Home et about / underAbout 
    Si je suis sur une page /HousingSheet ou /Error404  =>  Avoir juste les classes home et about */

    const pathname = path.pathname;

    return (
        <div className="header">
            <img src={Logo} alt=" Logo KASA" />

            <nav className="menu">
                <Link   to="/"
                        className={`home ${ pathname === "/" ? "underline" : ""}`}
                        > 
                    Accueil 
                </Link>
                <Link   to="/About" 
                        className={`about ${pathname === "/About" ? "underline" : ""}`}
                        > 
                    A Propos 
                </Link>
            </nav>
        </div>
    )
}

export default Header;