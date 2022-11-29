import Card from "../components/Card/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  addToFavorite,
  addToCart,
  cartItems,
  favoriteItem,
}) {
  return (
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
            value={searchValue}
            type="text"
            placeholder="Поиск..."
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
              key={item.name + item.price + item.id}
              name={item.name}
              price={item.price}
              img={item.img}
              addToFavorite={(obj) => addToFavorite(obj)}
              addToBasket={(obj) => addToCart(obj)}
              added = {cartItems.some(obj => obj.name === item.name)}
              favoriteId = {favoriteItem.some(obj => obj.name === item.name)}
            />
          ))}
      </div>
    </section>
  );
}

export default Home;
