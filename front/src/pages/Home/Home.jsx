import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import Banner from "../../assets/banniere_home.png";
import Card from "../../components/Card/Card";

/* Récupérer les données de mon fichier json */ 
import jsonData from '../../data.json'

const Home = () => {
    const chemin = useLocation();
    console.log(chemin);
    return (
        <div className="layoutHome">
            <div className="containerBanner">
                <div className="blurBanner"> </div>
                <img src={Banner} alt="Bannière About us" />
                <span className="slogan"> Chez vous, partout et ailleurs </span>
            </div>
            <div className="containerCard">
                {/* Quand un seul argument pas besoin des () et une seule ligne dans le return pas besoin de ce dernier */}
                {jsonData.map(data => <Card data={data}/> )}
            </div>
        </div>
    )
}

export default Home;