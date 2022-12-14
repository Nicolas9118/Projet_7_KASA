import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

const Error = () => {
    const chemin = useLocation();
    console.log(chemin);
    return (
        <div className="layoutError">
            <div className="containerError">
                <h1 className="numberError"> 404 </h1>
                <p className="oups"> Oups ! La page que vous demandez n'existe pas. </p>
                <Link className="return" to="/"> Retourner sur la page d'accueil </Link>
            </div>
        </div>
    )
}

export default Error;