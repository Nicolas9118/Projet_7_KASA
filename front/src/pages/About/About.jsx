import React from "react";
// import { useLocation } from "react-router-dom";
import "./style.css";
import Banner from "../../assets/banniere_about.png";

// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import DropDownLarge from "../../components/DropDownLarge/DropDownLarge";
import { DropAboutData } from "../../components/DropDownLarge/DropAboutData"

const About = ({path}) => {
    // const chemin = useLocation();
    return (
        <div className="layoutAbout">
            <div className="containBanner">
                <div className="blur"> </div>
                <img src={Banner} alt="Bannière About us" />
            </div>
            <div className="containDrop">
                <DropDownLarge section={DropAboutData[0]}/>
                <DropDownLarge section={DropAboutData[1]}/>
                <DropDownLarge section={DropAboutData[2]}/>
                <DropDownLarge section={DropAboutData[3]}/>
            </div>
        </div>
    )
}

export default About;