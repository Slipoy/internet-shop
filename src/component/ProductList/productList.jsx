import React from "react";
import style from  './roductList.module.css'
import styleCard from  '../Categories/CategoriesCard/cards.module.css'
import img from "../../assets/img/3.jpg"
import ProductCard from "./ProductCard/ProductCard";
import {useParams} from "react-router-dom";
import usePageData from "../../hooks/usePageData";
import Spinner from "../Spiner/spiner";



const ProductList = ()=> {
    const {products} = useParams()
    const productList = usePageData(products)
    const minPrice = Math.min.apply(null, productList?.data.map(el => el.price));

    if(!productList) {
        return <Spinner/>
    }
    return(
        <section className={style.menu}>
            <div className={style.heading}>
                <h2 className={style.titleMenu}>{productList.partnerName}</h2>
                <p className={styleCard.rating}>4.5</p>
                <p className={styleCard.price}>От ${minPrice}</p>
                <p className={styleCard.category}>{productList.category}</p>
            </div>
            <div className={style.productCards}>
                {productList.data.map(item => <ProductCard key = {item.id} {...item}/>)}

            </div>
        </section>
    )
}

export default ProductList