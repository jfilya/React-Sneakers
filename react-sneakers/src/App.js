// import { Link } from "react-router-dom";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    img: "img/sneakers/1.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    img: "img/sneakers/2.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    img: "img/sneakers/3.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    img: "img/sneakers/4.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    img: "img/sneakers/5.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    img: "img/sneakers/6.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    img: "img/sneakers/7.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    img: "img/sneakers/8.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    img: "img/sneakers/9.jpg",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    img: "img/sneakers/10.jpg",
  },
];
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
          {arr.map((obj) => (
            <Card name={obj.name} price={obj.price} imgUrl={obj.img} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
