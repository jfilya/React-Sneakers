function Drawer() {
  return (
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
        <button className="drawer__btn cursor">
          Оформить заказ <img src="img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
}
export default Drawer;
