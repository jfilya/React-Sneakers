// import { Link } from "react-router-dom";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";
function App() {
  return (
    <div className="wrapper"> 
      <Drawer />
      <Header />
      <section className="content">
        <div className="content__top">
          <h1>Все кроссовки</h1>
          <div className="content__search-block">
            <img src="img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="content__cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default App;
