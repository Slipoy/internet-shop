import React from "react";
import {NavLink} from "react-router-dom";
import style from "./cards.module.css"
import img from '../../../assets/img/3.jpg'

const Cards = ({name,price,kitchen,image, stars, time_of_delivery,products})=>{
    const src = require(`../../../assets/${image}`)
    return(
        <NavLink to={"categories/" + products}  className={style.card}>
            <img src={src} alt="image" />
            <div className={style.cardText}>
                <div className={style.cardHeading}>
                    <h3>{name}</h3>
                    <span>{time_of_delivery}</span>
                </div>
                <div className={style.cardInfo}>
                    <p className={style.rating}>{stars}</p>
                    <p className={style.price}>От ${price}</p>
                    <p className={style.category}>{kitchen}</p>
                </div>
            </div>
        </NavLink>
    )
}
export default Cards