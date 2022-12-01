import {Link} from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__left cursor">
          <img className="header__logo" src="img/logo.png" alt="logo"/>
          <div className="header__logo-text">
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="header__right">
        <li onClick={props.onClickCart} className="cursor">
          <img className="header__cart" src="img/cart.svg" alt="cart"/>
          <span>1205 руб.</span>
        </li>
        <li className="header__favorite cursor">
          <Link to="/favorites">
            <img src="img/favorite.svg" alt="heart"/>
          </Link>
        </li>
        <li className="cursor">
          <img className="header__user" src="img/user.svg" alt="user"/>
        </li>
      </ul>
    </header>
  );
}

export default Header;
