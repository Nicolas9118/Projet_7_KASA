import React from "react";

import "./style.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Tag from "../../components/Tag/Tag";
import DropDownLarge from "../../components/DropDownLarge/DropDownLarge";
import DropDown from "../../components/DropDown/DropDown";

const Home = () => {
    return (
        <div className="layout">
            <Header />
            <Tag />
            <DropDownLarge />
            <DropDown />
            <Footer />
        </div>
    )
}

export default Home;