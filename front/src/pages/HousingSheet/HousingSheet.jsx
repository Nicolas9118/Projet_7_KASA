import React from "react";
import { useParams } from "react-router-dom";

import "./style.css";
import Carrousel from "../../components/Carrousel/Carrousel"
import Tag from "../../components/Tag/Tag";
import Drop from "../../components/DropDown/DropDown";
import jsonData from '../../data.json'
import Error from "../Error404/Error404";



const House = () => {
    const { id } = useParams();
    const idData = jsonData.find( data => data.id  === id );

    /* Avoir le bon nombre d'étoile selon la note */ 
    let rates = [];
    let starComplete = true;

    for(let index = 0; index < 5; index++) {
        //sécurité (chainage optionnel) si mon idData existe alors aller chercher mon .rating sinon rien faire
        if( index === parseInt(idData?.rating) ) {
            starComplete = false;
        }
        if ( starComplete === true ) {
            rates.push(
                <svg className="star" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
                </svg>)
        } else {
            rates.push(
                <svg className="star" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#E3E3E3"/>
                </svg>)
        }
    }

    // mettre en tableau descirption pour qu'il soit pris en compte par le map du DropDown
    const description = [];
    description.push(idData.description);
    console.log(description);
    console.log(idData.equipments);

    return (
        <>
        {/* si idData existe alors afficher ma page HousingSheet sinon afficher la page Error */}
        { idData ? (
            <div className="layoutHouse">
                <Carrousel slides={idData.pictures} />
                <div className="up">
                    <div className="left">
                            <h1> {idData.title} </h1>
                            <p> Paris, île-de-France </p>
                        <Tag tagName={idData.tags}/>
                    </div>
                    <div className="right">
                        <div className="lessor">
                            <p> {idData.host.name} </p>
                            <img src={idData.host.picture} alt=" Profil loueur " />
                        </div>
                        <div className="containerStar">
                            {rates}
                        </div>
                    </div>
                </div>

                <div className="containerDrop">
                    <Drop name="Description" sub={description} />
                    <Drop name="Equipement" sub={idData.equipments} />
                </div>
            </div>
        ) : <Error /> }
        </>
    )
}

export default House;