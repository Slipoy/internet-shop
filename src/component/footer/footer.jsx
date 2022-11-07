import React from "react";
import style from "./footer.module.css"
import {Link} from "react-router-dom";
import logo from "../../assets/img/bike-or-bicycle-drawing_186119-76.png"
import inst from "../../assets/img/social/instagram.svg"
import face from "../../assets/img/social/fb.svg"


const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footerBlock}>

                <Link to="/" className={style.footerLogo}>
                    <img src={logo} alt="logo"/>
                </Link>

                <nav className={style.footerNav}>
                    <a href="#" className={style.footerLink}>Ресторанам </a>
                    <a href="#" className={style.footerLink}>Курьерам</a>
                    <a href="#" className={style.footerLink}>Пресс-центр</a>
                    <a href="#" className={style.footerLink}>Контакты</a>
                </nav>
                <div className={style.socialLinks}>
                    <a href="#" target="_blank" className={style.socialLinks}><img src={inst} alt="instagram"/></a>
                    <a href="#" target="_blank" className={style.socialLinks}><img src={face} alt="facebook"/></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer