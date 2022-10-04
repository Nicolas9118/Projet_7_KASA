import React from "react";
import "./style.css"

const Tag = ({tagName}) => {
    return (
    <div className="containerTag">
        {tagName.map((tag, index) => {
                    return (
                        <div className={`tag ${index}`} key={index}>
                            <p> {tag} </p>
                        </div>
                    );
                })}
    </div>
    );
}

export default Tag;