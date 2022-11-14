import React, {useState} from "react";
import styleCard from "../../Categories/CategoriesCard/cards.module.css";
import img from "../../../assets/img/3.jpg";
import style from "../roductList.module.css";
import {connect} from "react-redux";
import {addToBasket, deleteBasket} from "../../../reduse-store/basket";



const ProductCard = ({ id, description, name, price, addToBasket,deleteBasket})=>{

    const [isBasket, setBasket ] = useState(false)

    const handleAddBasket = ()=>{
        if (!isBasket){
            setBasket(!isBasket)
            const data = {
                id,
                title: name,
                price,
                count: 1
            }
            addToBasket(data)
        }
    }
    const handleDeleteBasket = ()=>{
        setBasket(!isBasket)
        deleteBasket(id)

    }
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
                <div className={style.cardButtom}>
                    {!isBasket?
                        <button className={style.cardBtn} onClick={handleAddBasket}>
                        <span className={style.btnText}>В корзину</span>
                        <span className={style.svg}>{price}</span>
                    </button> :
                        <button className={style.cardBtn} onClick={handleDeleteBasket}>
                    <span className={style.btnText}>Добавлено в</span>
                    <span className={style.svg}>{price}</span>
                </button>}

                    <strong>500$</strong>
                </div>
            </div>

        </div>
    )
}

export default connect (null, {addToBasket,deleteBasket})(ProductCard)