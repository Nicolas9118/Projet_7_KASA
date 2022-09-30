import React from "react";

import "./style.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Tag from "../../components/Tag/Tag";
import DropDownLarge from "../../components/DropDownLarge/DropDownLarge";
import DropDown from "../../components/DropDown/DropDown";
import Card from "../../components/Card/Card";
import Carrousel from "../../components/Carrousel/Carrousel";
import CarrouselMobile from "../../components/CarrouselMobile/CarrouselMobile";
import { CarrouselData } from "../../components/Carrousel/CarrouselData"

const Home = () => {
    return (
        <div className="layout">
            <Header />
            <Tag />
            <DropDownLarge />
            <DropDown />
            <Card />
            <Carrousel slides={CarrouselData}/>
            <CarrouselMobile slides={CarrouselData} />
            <Footer />
        </div>
    )
}

export default Home;