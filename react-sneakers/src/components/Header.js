function Header() {
  return (
    <header className="header">
      <div className="header__left  cursor">
        <img className="header__logo" src="img/logo.png" alt="logo" />
        <div className="header__logo-text">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

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
  );
}
export default Header;
