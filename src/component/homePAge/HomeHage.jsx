import React, {useState} from "react";
import Banner from "../Banner/banner";
import SearchInput from "../searchInput/searchInput";
import Categories from "../Categories/categories";
import SearchList from "../SearchList/SearxhList";


const HomePage = ()=> {
const [search, setSearch] = useState("")
    const handlerChange = (e) =>{
    setSearch(e.target.value)
    }

    return(
        <>
            <Banner/>
            <div>
                <SearchInput value={search} onChange={handlerChange}/>
                {search? <SearchList value={search}/>:<Categories/>
                }
            </div>
        </>
    )
}

export default HomePage