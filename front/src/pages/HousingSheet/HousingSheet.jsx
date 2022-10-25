import React from "react";
import { useLocation, useParams, Navigate} from "react-router-dom";

import "./style.css";

import Header from "../../components/Header/Header";
import Carrousel from "../../components/Carrousel/Carrousel"
import Tag from "../../components/Tag/Tag";
import Drop from "../../components/DropDown/DropDown";
import Footer from "../../components/Footer/Footer";
/* Récupérer les données de mon fichier json */ 
import jsonData from '../../data.json'



const House = () => {
    const { id } = useParams();
    const chemin = useLocation();

    const idData = jsonData.find( data => data.id  === id );
    console.log(idData);
    if (!idData)  {
        return <Navigate to="/Error" />
    }
    /* Avoir le bon nombre d'étoile selon la note */ 
    const rates = [];
    for(let i = 0; i < idData.rating; i++) { // Stars rose
        rates.push(
        <svg className="star" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#FF6060"/>
        </svg>)
    }
    for(let l = 5-idData.rating; l > 0 ; l--) {  // Stars grise
        rates.push(
        <svg className="star" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.645 15L18 3L14.355 15H3L12.27 21.615L8.745 33L18 25.965L27.27 33L23.745 21.615L33 15H21.645Z" fill="#E3E3E3"/>
        </svg>)
    }

    const description = [];
    description.push(idData.description);
    console.log(description);

    return (
        <div className="layout">
            <Header path={chemin}/>
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
            <Footer />
        </div>
    )
}

export default House;