import style from "./app.module.css"
import Header from "./component/Header/header";
import Banner from "./component/Banner/banner";
import SearchInput from "./component/searchInput/searchInput";
import Categories from "./component/Categories/categories";
import Footer from "./component/footer/footer";

function App() {
  return (
    <div className={style.cont}>
      <main>
          <Header/>
          <Banner/>
          <SearchInput/>
          <Categories/>
          <Footer/>
      </main>
    </div>
  );
}

export default App;
