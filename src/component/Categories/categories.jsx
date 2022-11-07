import React from "react";
import Cards from "./CategoriesCard/categoriesCard";
import style from "./categories.module.css"

const Categories = ()=>{
    return(
        <div className={style.categories}>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
    )
}
export default Categories