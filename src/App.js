import style from "./app.module.css"
import Header from "./component/Header/header";
import Banner from "./component/Banner/banner";
import SearchInput from "./component/searchInput/searchInput";
import Categories from "./component/Categories/categories";
import Footer from "./component/footer/footer";
import {Route, Routes} from "react-router-dom";
import HomePage from "./component/homePAge/HomeHage";
import ProductList from "./component/ProductList/productList";

function App() {
  return (
    <div className={style.cont}>
      <main>
          <Header/>
          <Routes>
              <Route path="internet-shop/" element={<HomePage/>}/>
              <Route path="categories/:products" element={<ProductList/>}/>
          </Routes>
          <Footer/>
      </main>
    </div>
  );
}

export default App;
