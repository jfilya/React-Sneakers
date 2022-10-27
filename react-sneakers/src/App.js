// import { Link } from "react-router-dom";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";
import Card from "./components/Card/Card";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://6358eac7ff3d7bddb993de7c.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  const addToCart = (el) => {
    setCartItems((prev) => [...prev, el]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <section className="content">
        <div className="content__top">
          <h1>{searchValue ? `Поиск: ${searchValue}` : `Все кроссовки`}</h1>
          <div className="content__search-block">
            <img src="img/search.svg" alt="search" />
            {searchValue && (
              <img
                className="content__search-clear cursor"
                src="img/btn-remove.svg"
                alt="clear"
                onClick={() => setSearchValue("")}
              />
            )}
            <input
              onChange={onChangeSearchInput}
              type="text"
              placeholder="Поиск..."
              value={`${searchValue}`}
            />
          </div>
        </div>

        <div className="content__cards">
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.name + item.price}
                name={item.name}
                price={item.price}
                imgUrl={item.img}
                addToFavorite={() => console.log(item)}
                addToBasket={(obj) => addToCart(obj)}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default App;
