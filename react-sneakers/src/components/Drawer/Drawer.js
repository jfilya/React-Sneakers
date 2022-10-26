import style from "./Drawer.module.scss";

function Drawer({ onClose, items = [] }) {
  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <h2>
          Корзина
          <span className="cursor" onClick={onClose}>
            <img
              className={style.cart__remove + " cursor"}
              src="img/btn-remove.svg"
              alt="remove"
            />
          </span>
        </h2>
        <div className={style.cart}>
          {items.map((obj) => (
            <div className={style.cart__item}>
              <img
                className={style.cart__img}
                src={`${obj.imgUrl}`}
                alt="sneakers"
              />
              <div>
                <p>{`${obj.name}`}</p>
                <b>{`${obj.price}`} руб.</b>
              </div>
              <img
                className={style.cart__remove + " cursor"}
                src="img/btn-remove.svg"
                alt="remove"
              />
            </div>
          ))}
        </div>
        <ul className={style.drawer__total}>
          <li>
            <span>Итого:</span>
            <div className={style.drawer__dot}></div>
            <b>21 498 руб.</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div className={style.drawer__dot}></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className={style.drawer__btn + " cursor"}>
          Оформить заказ <img src="img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
}
export default Drawer;
