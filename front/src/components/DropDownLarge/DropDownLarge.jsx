import React from "react";
import "./style.css";
import Arrow from "../../assets/arrow_up_and_down.png";

const DropDownLarge = () => {
    return (
        <div className="DropDownLarge">
            <div className="DropDownLarge__Menu">
                <p> Respect </p>
                <img src={Arrow} alt="Flèche du menu déroulant" />
            </div>
            <div className="DropDownLarge__Sub-menu">
                <p> La bienveillance fait partie des valeurs fondatrices de Kasa.
                    Tout comportement discriminatoire ou de perturbation du voisinage 
                    entraînera une exclusion de notre plateforme. </p>
            </div>
        </div>
    )
}

export default DropDownLarge;