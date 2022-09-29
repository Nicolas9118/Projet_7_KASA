import React from "react";
import "./style.css";
import Arrow from "../../assets/arrow_up_and_down.png";

const DropDown = () => {
    return (
        <div className="DropDown">
            <div className="DropDown__Menu">
                <p> Equipement </p>
                <img src={Arrow} alt="Flèche du menu déroulant" />
            </div>
            <div className="DropDown__Sub-menu">
                <p> Climatisation </p>
                <p> Wi-Fi </p>
                <p> Cuisine </p>
                <p> Espace de travail </p>
                <p> Fer à repasser </p>
                <p> Sèche-cheveux </p>
                <p> Cintres </p>
            </div>
        </div>
    )
}

export default DropDown;