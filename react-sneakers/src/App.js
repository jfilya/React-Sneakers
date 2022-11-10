// import { Link } from "react-router-dom";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";
import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItem, setFavoriteItem] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://6358eac7ff3d7bddb993de7c.mockapi.io/items")
      .then((res) => setItems(res.data));

    axios
      .get("https://6358eac7ff3d7bddb993de7c.mockapi.io/cart")
      .then((res) => setCartItems(res.data));

    axios
      .get("https://6358eac7ff3d7bddb993de7c.mockapi.io/favorite")
      .then((res) => setFavoriteItem(res.data));
  }, []);

  const addToCart = (el) => {
    axios.post("https://6358eac7ff3d7bddb993de7c.mockapi.io/cart", el);
    setCartItems((prev) => [...prev, el]);
  };
  const removeItemCart = (id) => {
    axios.delete(`https://6358eac7ff3d7bddb993de7c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const addToFavorite = (el) => {
    axios.post("https://6358eac7ff3d7bddb993de7c.mockapi.io/favorite", el);
    setFavoriteItem((prev) => [...prev, el]);
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={removeItemCart}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          exact
          path="/favorites"
          element={
            <Favorites
              items={favoriteItem}
              addToCart={addToCart}
              addToFavorite={addToFavorite}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              addToCart={addToCart}
              onChangeSearchInput={onChangeSearchInput}
              addToFavorite={addToFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
