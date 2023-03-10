import React from "react";
import axios from "axios";

import {Routes, Route} from "react-router-dom";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders"

export const AppContext = React.createContext({})


function App() {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartItems, setCartItems] = React.useState([]);
  const [favoriteItem, setFavoriteItem] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);


  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get("https://6358eac7ff3d7bddb993de7c.mockapi.io/cart"),
          axios.get("https://6358eac7ff3d7bddb993de7c.mockapi.io/favorite"),
          axios.get("https://6358eac7ff3d7bddb993de7c.mockapi.io/items")
        ])
        setIsLoading(true)

        setFavoriteItem(favoritesResponse.data)
        setCartItems(cartResponse.data)
        setItems(itemsResponse.data)

        setIsLoading(false)
      } catch (error) {
        alert("Ошибка при запросе данных")
        console.log(error)
      }
    };
    fetchData()
  }, []);

  const addToCart = async (el) => {
    try {
      if (cartItems.find((obj) => obj.name === el.name)) {
        const element = cartItems.find((obj) => obj.name === el.name)
        axios.delete(`https://6358eac7ff3d7bddb993de7c.mockapi.io/cart/${element.id}`);
        setCartItems((prev) => prev.filter((item) => item.name !== el.name));
      } else {
        const {data} = await axios.post("https://6358eac7ff3d7bddb993de7c.mockapi.io/cart", el);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log("Не удалось добавить товары в корзину");
      console.log(error)
    }
  };
  const removeItemCart = (id) => {
    try {
      axios.delete(`https://6358eac7ff3d7bddb993de7c.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert("Ошибка при запросе данных")
      console.log(error)
    }
  }


  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const addToFavorite = async (el) => {
    try {
      if (favoriteItem.find((obj) => obj.name === el.name)) {
        const element = favoriteItem.find((obj) => obj.name === el.name)
        axios.delete(`https://6358eac7ff3d7bddb993de7c.mockapi.io/favorite/${element.id}`);
        setFavoriteItem((prev) => prev.filter((item) => item.name !== el.name));
      } else {

        const {data} = await axios.post("https://6358eac7ff3d7bddb993de7c.mockapi.io/favorite", el);
        setFavoriteItem((prev) => [...prev, data]);
      }
    } catch (error) {
      console.log(error)
      console.log("Не удалось добавить товары в избранное");
    }
  };
  const isItemAdded = (name) => cartItems.some(obj => obj.name === name)
  return (
    <AppContext.Provider value={{items, cartItems, favoriteItem, isItemAdded, setCartOpened, setCartItems}}>
      <div className="wrapper">

        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={removeItemCart}
          cartOpened={cartOpened}
        />

        <Header
          onClickCart={() => setCartOpened(true)}
        />

        <Routes>
          <Route
            exact
            path="/favorites"
            element={
              <Favorites
                addToCart={addToCart}
                addToFavorite={addToFavorite}
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/orders"
            element={
              <Orders
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
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                addToCart={addToCart}
                onChangeSearchInput={onChangeSearchInput}
                addToFavorite={addToFavorite}
                isLoading={isLoading}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
