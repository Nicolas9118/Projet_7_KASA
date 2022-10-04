import React from "react";
import { useState } from "react";
import "./style.css";

const DropDown = ({name, sub}) => {
    const [currentDrop, setCurrentDrop] = useState(true);
    const handleChangeDrop = () => {
        setCurrentDrop(!currentDrop);
    }
    return (
        <div onClick={handleChangeDrop}
             className="DropDown">
            <div className="DropDown__Menu">
                <p> {name} </p>
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`arrow${currentDrop ? "Up" : "Down"}`}>
                    <path d="M4.6635 7.85949L2.53058 10.0046L14.4605 21.9233L26.3904 9.99257L24.2575 7.85949L14.4605 17.6572L4.6635 7.85949Z" fill="white"/>
                </svg>
            </div>
            <div className={`DropDown__Sub-menu${currentDrop ? "On" : "Off"}`}>
                {sub.map((subs, index) => {
                    return (
                        <div className={`${index}`} key={index}>
                            <p> {subs} </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default DropDown;