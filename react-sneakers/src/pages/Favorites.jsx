import Card from "../components/Card/Card";
import React from "react";
import { AppContext } from '../App'

function Favorites({ addToFavorite, addToCart }) {
  const { favoriteItem } = React.useContext(AppContext);

  return (
    <section className="content">
      <div className="content__top">
        <h1>Закладки</h1>
      </div>
      <div className="content__cards">
        {favoriteItem.length
          ? favoriteItem.map((item) => (
              <Card
                key={item.name + item.price + item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                addToFavorite={(obj) => addToFavorite(obj)}
                addToBasket={(obj) => addToCart(obj)}
                favoriteId={true}
              />
            ))
          : `Пусто`}
      </div>
    </section>
  );
}

export default Favorites;
