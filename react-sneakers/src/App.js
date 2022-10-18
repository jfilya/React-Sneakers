// import { Link } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>
            Корзина
            <span className="cursor">
              <img
                className="cart__remove cursor"
                src="img/btn-remove.svg"
                alt="remove"
              />
            </span>
          </h2>
          <div className="cart">
            <div className="cart__item">
              <img
                className="cart__img"
                src="img/sneakers/1.jpg"
                alt="sneakers"
              />
              <div>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="cart__remove cursor"
                src="img/btn-remove.svg"
                alt="remove"
              />
            </div>
          </div>
          <ul className="drawer__total">
            <li>
              <span>Итого:</span>
              <div className="drawer__dot"></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div className="drawer__dot"></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="drawer__btn cursor">Оформить заказ <img src="img/arrow.svg" alt="arrow" /></button>
        </div>
      </div>

      <header className="header">
        {/* <Link to="/"> */}
        <div className="header__left  cursor">
          <img className="header__logo" src="img/logo.png" alt="logo" />
          <div className="header__logo-text">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        {/* </Link> */}
        <ul className="header__right">
          <li className="cursor">
            <img className="header__cart" src="img/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li className="cursor">
            <img className="header__user" src="img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <section className="content">
        <div className="content__top">
          <h1>Все кроссовки</h1>
          <div className="content__search-block">
            <img src="img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="content__cards">
          <div className="content__card">
            <div className="content__favorite cursor">
              <img src="img/heart.svg" alt="heart" />
            </div>

            <img
              className="content__sneakers"
              src="img/sneakers/1.jpg"
              alt="sneakers"
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="content__card-bottom">
              <div className="content__price">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <div className="content__btn  cursor">
                <img
                  className="content__plus"
                  src="img/btn-plus.svg"
                  alt="plus"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
