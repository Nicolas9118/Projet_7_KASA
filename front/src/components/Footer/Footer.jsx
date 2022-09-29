import React from "react";

import "./style.css"

import Logo from "../../assets/logo_footer.png"

const Footer = () => {
    return (
        <div className="footer">
            <img src={Logo} alt=" Logo KASA" />
            <p> ©  2020 Kasa. All rights reserved </p>
        </div>
    )
}

export default Footer;