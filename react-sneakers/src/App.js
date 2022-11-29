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
    async function fetchData() {
      const cartResponse =  await axios.get("https://6358eac7ff3d7bddb993de7c.mockapi.io/cart")
      const favoritesResponse =  await axios.get("https://6358eac7ff3d7bddb993de7c.mockapi.io/favorite")
      const itemsResponse =  await axios.get("https://6358eac7ff3d7bddb993de7c.mockapi.io/items")

      setFavoriteItem(favoritesResponse.data)
      setCartItems(cartResponse.data)
      setItems(itemsResponse.data)
    }
    fetchData()
  }, []);

  const addToCart = async (el) => {
    try {
      if (cartItems.find((obj) => obj.name === el.name)) {
        axios.delete(
            `https://6358eac7ff3d7bddb993de7c.mockapi.io/cart/${el.id}`
        );
        setCartItems((prev) => prev.filter((item) => item.name !== el.name));
      } else {

        const { data } = await axios.post("https://6358eac7ff3d7bddb993de7c.mockapi.io/cart", el);
        setCartItems((prev) => [...prev, data]);
        console.log("here",el, data, cartItems )
      }
    } catch (error) {
      console.log("Не удалось добавить товары в корзину");
    }
  };
  const removeItemCart = (id) => {
    axios.delete(`https://6358eac7ff3d7bddb993de7c.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));

  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const addToFavorite = async (el) => {

    try {
      if (favoriteItem.find((obj) => obj.name === el.name)) {
        axios.delete(
          `https://6358eac7ff3d7bddb993de7c.mockapi.io/favorite/${el.id}`
        );
        setFavoriteItem((prev) => prev.filter((item) => item.name !== el.name));
      } else {

        const { data } = await axios.post(
          "https://6358eac7ff3d7bddb993de7c.mockapi.io/favorite",
          el
        );

        setFavoriteItem((prev) => [...prev, data]);
      }
    } catch (error) {

      console.log("Не удалось добавить товары в избранное");
    }
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
              cartItems = {cartItems}
              favoriteItem={favoriteItem}
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
