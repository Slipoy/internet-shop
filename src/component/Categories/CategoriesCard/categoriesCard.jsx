import React from "react";
import {NavLink} from "react-router-dom";
import style from "./cards.module.css"
import img from '../../../assets/img/3.jpg'

const Cards = ()=>{
    return(
        <NavLink to={"/"} className={style.card}>
            <img src={img} alt="image" />
            <div className={style.cardText}>
                <div className={style.cardHeading}>
                    <h3>Путишествия</h3>
                    <span>60</span>
                </div>
                <div className={style.cardInfo}>
                    <p className={style.rating}>4.5</p>
                    <p className={style.price}>500$</p>
                    <p className={style.category}>Египет</p>
                </div>
            </div>
        </NavLink>
    )
}
export default Cards