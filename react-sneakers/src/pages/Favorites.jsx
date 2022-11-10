import Card from "../components/Card/Card";
function Favorites({ items, addToFavorite, addToCart }) {
  return (
    <section className="content">
      <div className="content__top">
        <h1>Закладки</h1>
      </div>
      <div className="content__cards">
        {items.length
          ? items.map((item) => (
              <Card
                key={item.name + item.price + item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                id={item.id}
                addToFavorite={(obj) => addToFavorite(obj)}
                addToBasket={(obj) => addToCart(obj)}
                favorited={true}
              />
            ))
          : `Пусто`}
      </div>
    </section>
  );
}

export default Favorites;
