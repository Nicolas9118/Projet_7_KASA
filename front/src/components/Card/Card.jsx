import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Card = ({data}) => {
    console.log(data);
    return (
        <NavLink className="card" to={`/housingSheet/${data.id}`}> 
            <div className="shadowCover"> </div>
            <img src={data.cover} alt="Cover Housing" />

            <span className="title"> {data.location} </span>
        </NavLink>
    )
}

export default Card;