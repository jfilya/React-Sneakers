// import { Link } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
      <header className="header">
        {/* <Link to="/"> */}
        <div className="header__left">
          <img className="header__logo" src="img/logo.png" alt="logo" />
          <div className="header__logo-text">
            <h3>React Sneakers</h3>
            <p >Магазин лучших кроссовок</p>
          </div>
        </div>
        {/* </Link> */}
        <ul className="header__right">
          <li>
          <img className="header__cart" src="img/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
          <img className="header__user" src="img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <section className="content">
        <h1>Все кроссовки</h1>
      </section>
    </div>
  );
}

export default App;
