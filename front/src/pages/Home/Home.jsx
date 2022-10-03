import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tag from "../../components/Tag/Tag";
// import DropDownLarge from "../../components/DropDownLarge/DropDownLarge";
// import DropDown from "../../components/DropDown/DropDown";
import Card from "../../components/Card/Card";
import Carrousel from "../../components/Carrousel/Carrousel";
import CarrouselMobile from "../../components/CarrouselMobile/CarrouselMobile";
import { CarrouselData } from "../../components/Carrousel/CarrouselData"

const Home = () => {
    const chemin = useLocation();
    console.log(chemin);
    return (
        <div className="layout">
            <Header path={chemin}/>
            <Tag />
            {/* <DropDownLarge />
            <DropDown /> */}
            <Card />
            <Carrousel slides={CarrouselData}/>
            <CarrouselMobile slides={CarrouselData} />
            <Footer />
        </div>
    )
}

export default Home;