import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
import Banner from "../../assets/banniere_home.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

/* Récupérer les données de mon fichier json */ 
import jsonData from '../../data.json'
console.log(jsonData);

const Home = () => {
    const chemin = useLocation();
    console.log(chemin);
    return (
        <div className="layout">
            <Header path={chemin}/>
            <div className="containerBanner">
                <div className="blurBanner"> </div>
                <img src={Banner} alt="Bannière About us" />
                <span className="slogan"> Chez vous, partout et ailleurs </span>
            </div>
            <div className="containerCard">
            {jsonData.map((data) => {
                return (
                    <Card data={data}/>
                )
            })}
            
            </div>





            {/* <Tag />
            {/* <DropDownLarge />
            <DropDown />
            
            <Carrousel slides={CarrouselData}/>
            <CarrouselMobile slides={CarrouselData} /> */}
            <Footer />
        </div>
    )
}

export default Home;