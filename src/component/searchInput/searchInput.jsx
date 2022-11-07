import React from "react";
import style from  "./suarchInput.module.css"


const SearchInput = ()=>{
    return(
        <div className={style.categoriesHeading}>
            <h2 className={style.categoriesTitle}>Категории</h2>
            <label >
                <input
                    type="text"
                    placeholder="Поиск"/>
            </label>
        </div>
    )
}
export default SearchInput