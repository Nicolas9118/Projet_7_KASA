import React from "react";
import { useState } from "react";
import "./style.css";

const DropDownLarge = ({section}) => {
    const [currentDropLarge, setCurrentDropLarge] = useState(true);
    const handleChangeDropLarge = () => {
        setCurrentDropLarge(!currentDropLarge);
    }
    console.log(currentDropLarge);
    return (
        <div onClick={handleChangeDropLarge}
             className="DropDownLarge"
            >
            <div className="DropDownLarge__Menu">
                <p> {section.title} </p>
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`arrow${currentDropLarge ? "Down" : "Up"}`}>
                    <path d="M4.6635 7.85949L2.53058 10.0046L14.4605 21.9233L26.3904 9.99257L24.2575 7.85949L14.4605 17.6572L4.6635 7.85949Z" fill="white"/>
                </svg>
            </div>
             <div className={`DropDownLarge__Sub-menu${currentDropLarge ? "Off" : "On"}`}> 
                <p> {section.body} </p>
            </div>
        </div>
    )
}

export default DropDownLarge;