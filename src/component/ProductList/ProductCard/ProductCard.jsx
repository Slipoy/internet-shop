import React from "react";
import styleCard from "../../Categories/CategoriesCard/cards.module.css";
import img from "../../../assets/img/3.jpg";
import style from "../roductList.module.css";



const ProductCard = ({ id, description, name, price})=>{
    return(
        <div className={styleCard.card}>
            <img src={img} alt=""/>
            <div className={styleCard.cardText}>
                <div className={styleCard.cardHeading}>
                    <h3>{name}</h3>
                </div>
                <div className={styleCard.cardInfo}>
                    <p className={style.ingrediens}>{description}</p>
                </div>
                <div className={style.cardButtom} >
                    <button className={style.cardBtn}>
                        <span className={style.btnText}>В корзину</span>
                        <span className={style.svg}>{price}</span>
                    </button>
                    <strong>500$</strong>
                </div>
            </div>

        </div>
    )
}
export default ProductCard