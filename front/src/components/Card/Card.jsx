import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Card = () => {
    return (
        <NavLink to="#" className="card"> 
            {/* image selon la bdd mais 
            pour l'instant c'est une div*/}
            <div className="testImg"> </div>

            <span className="title"> Titre de la location </span>
        </NavLink>
    )
}

export default Card;