import {Link} from "react-router-dom";
import React from "react";
import {AppContext} from "../App";

function Header(props) {
  const {cartItems} = React.useContext(AppContext);
  return (
    <header className="header">
      <Link to="">
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
          <span>{cartItems.reduce((sum, obj) => sum + obj.price, 0)} руб.</span>
        </li>
        <li className="header__favorite cursor">
          <Link to="favorites">
            <img src="img/favorite.svg" alt="heart"/>
          </Link>
        </li>
        <li className="cursor">
          <Link to="orders">
            <img className="header__user" src="img/user.svg" alt="user"/>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
