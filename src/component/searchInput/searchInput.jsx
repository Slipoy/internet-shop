import React from "react";
import style from  "./suarchInput.module.css"


const SearchInput = ({value, onChange})=>{
    return(
        <div className={style.categoriesHeading}>
            <h2 className={style.categoriesTitle}>Категории</h2>
            <label >
                <input
                    type="text"
                    placeholder="Поиск"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}
export default SearchInput