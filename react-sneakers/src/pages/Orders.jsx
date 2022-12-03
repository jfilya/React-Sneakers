import Card from "../components/Card/Card";
import React from "react";
import axios from "axios";
import {AppContext} from "../App";

function Orders() {
  const [orderItems, setOrderItems] = React.useState([]);
  const {addToFavorite, addToCart} = React.useContext(AppContext)
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
        try {
          const {data} = await axios.get("https://6358eac7ff3d7bddb993de7c.mockapi.io/orders")
          setOrderItems(data.map(obj => obj.items).flat())
          setIsLoading(false)
        } catch (error) {
          alert("Ошибка при запросе заказов")
          console.error(error)
        }
      }
    )()
  }, [])

  const renderOrders= () => {
    return (
      isLoading
        ? [...Array(10)]
        : (orderItems)).map((item, index) => (
        <Card
          key={index}
          {...item}
          addToFavorite={(obj) => addToFavorite(obj)}
          addToBasket={(obj) => addToCart(obj)}
          loading={isLoading}
        />
      ))
  }

  return (
    <section className="content">
      <div className="content__top">
        <h1>Мои заказы</h1>
      </div>
      <div className="content__cards">
        {renderOrders().length ? renderOrders()  : "Вы еще ничего не заказали"}
      </div>
    </section>
  )
}

export default Orders;
