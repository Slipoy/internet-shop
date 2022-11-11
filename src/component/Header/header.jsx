import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../../assets/img/bike-or-bicycle-drawing_186119-76.png"
import style from "./header.module.css"



const Header = ()=>{
    return(
        <header className={style.header}>
            <div className={style.storeHeader}>
                <NavLink to={"/"}>
                    <img src={logo} alt=""/>
                </NavLink>
                <label className={style.address} >
                    <input type="text" placeholder="Адрес доставки"/>
                </label>
                <div >
                    <button className="button button-cart" id="cart-button" >
                        <span className="button-cart-svg"></span>
                        <span className="button-text">Корзина</span>
                    </button>
                    <button>LOGIn</button>
                </div>
            </div>
        </header>
    )
}
export default Header