import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../../assets/img/bike-or-bicycle-drawing_186119-76.png"
import style from "./header.module.css"
import ModalAuth from "../ModalAuth/ModalAuth";
import {logOut} from "../../reduse-store/reducer";
import {connect} from "react-redux";
import ModalBasket from "../ModalBasket/modalbasket";



const Header = ({login, logOut})=>{
    const [isLoginModal, setLoginModal] = useState(false)
    const navigate = useNavigate()
    const [isBasketModal, setBasketModal] = useState(false)

    const handlerLoginModal = ()=>{
        setLoginModal(!isLoginModal)
    }
    const handleBasketModal = ()=>{
        setBasketModal(!isBasketModal)
    }
    const handleLogOut = ()=>{
        logOut()
        navigate(`/`)
    }

    return(
        <header className={style.header}>
            <div className={style.storeHeader}>
                <NavLink to={"internet-shop/"}>
                    <img src={logo} alt=""/>
                </NavLink>
                <label className={style.address} >
                    <input type="text" placeholder="Адрес доставки"/>
                </label>
                <div>
                    <span>{login}</span>
                    {!login && <>
                        <button className="button button-cart" id="cart-button" onClick={handleBasketModal}>
                        <span className="button-cart-svg"></span>
                        <span className="button-text">Корзина</span>
                        </button>
                        <button className={style.btn} onClick={handlerLoginModal}>Войти</button></>}
                    {login && <>
                        <button className="button button-cart" id="cart-button" onClick={handleBasketModal}>
                        <span className="button-cart-svg"></span>
                        <span className="button-text">Корзина</span>
                    </button>
                        <button className={style.btn} onClick={handleLogOut}>Выйти</button>
                    </>}
                </div>
            </div>
            {isLoginModal && <ModalAuth onClose={handlerLoginModal}/>}
            {isBasketModal && <ModalBasket onClose={handleBasketModal}/>}
        </header>
    )
}

const mapStateToProps = (state)=>{
    return {
        login: state.logOutLog.login
    }
}

export default connect(mapStateToProps, {logOut})(Header)