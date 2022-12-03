import style from "./Drawer.module.scss";
import Info from "../info";
import React from "react";
import {AppContext} from "../../App";
import axios from "axios";


function Drawer({onClose, onRemove, items = [], cartOpened}) {
  const {cartItems, setCartItems} = React.useContext(AppContext);
  const [orderComplete, setOrderComplete] = React.useState(false)
  const [orderId, setOrderId] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false);
  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const {data} = await axios.post("https://6358eac7ff3d7bddb993de7c.mockapi.io/orders", {items: cartItems});
      setOrderId(data.id)
      setOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete("https://6358eac7ff3d7bddb993de7c.mockapi.io/cart/" + item.id);
      }
    } catch (error) {
      alert("Ошибка при создании заказа :(")
    }
    setIsLoading(false);
  }
  return (
    <div className={`${style.overlay}  ${cartOpened ? style.overlayVisible : ""}`}>
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

        {items.length ? (
          <>
            <div className={style.cart}>
              {items.map((obj) => (
                <div className={style.cart__item} key={obj.id}>
                  <img
                    className={style.cart__img}
                    src={`${obj.img}`}
                    alt="sneakers"
                  />
                  <div>
                    <p>{`${obj.name}`}</p>
                    <b>{`${obj.price}`} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
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
                <b>{cartItems.reduce((sum, obj) => sum + obj.price, 0)} руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div className={style.drawer__dot}></div>
                <b>{cartItems.reduce((sum, obj) => sum + obj.price, 0) / 100 * 5} руб.</b>
              </li>
            </ul>
            <button disabled={isLoading} onClick={onClickOrder} className={style.drawer__btn + " cursor"}>
              Оформить заказ <img src="img/arrow.svg" alt="arrow"/>
            </button>
          </>
        ) : (
          <Info
            title={orderComplete ? "Заказ оформлен" : "Корзина пуста"}
            description={orderComplete ? `Ваш заказ #${orderId} скоро будет передан службе доставки` : "Для оформления заказа добавьте товар в корзину"}
            image={orderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
