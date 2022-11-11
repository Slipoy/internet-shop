import React, {useState,useEffect} from "react";
import Cards from "./CategoriesCard/categoriesCard";
import style from "./categories.module.css"
import firebase from "../../utils/fb-config";
import usePageData from "../../hooks/usePageData";
import Spinner from "../Spiner/spiner";

const Categories = () => {
    const categoriesList = usePageData('partners');
    console.log(categoriesList)

    return (
        <div className={style.categories}>
            {categoriesList ? categoriesList.length ? categoriesList.map(item => {return <Cards {...item}/>})
                    : <h3>(no items)</h3>
                : <Spinner />}
        </div>
    )
}
export default Categories