import React, {useEffect, useState} from "react";
import firebase from "firebase/app";
import ProductCard from "../ProductList/ProductCard/ProductCard";
import style from "../Categories/categories.module.css"






const SearchList = ({value})=>{
    const [data, setData] = useState(null)
    useEffect(()=>{
        firebase
            .database()
            .ref()
            .once('value')
            .then(data=> setData(data.val()))
    },[])
    const allData = data && Object.values(data)
        .map(product => product.data)
        .filter(Boolean)
        .flat(Infinity)
        .filter(product => product.name.toUpperCase().includes(value.toUpperCase()))

    const isData = allData && allData.length >0
    return(
        <div className={style.categories}>
            {isData
                ? allData?.map(card => {
                    return <ProductCard key={card.id} {...card}/>
                })
                : <h2>К сожалению товар не найден</h2>
            }
        </div>
    )
}
export default SearchList