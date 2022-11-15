import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Layout = ({children}) => {
    const chemin = useLocation();
    return (
        <>
            <Header path={chemin} />
            {children}
            <Footer />
        </>
    )
}

export default Layout;