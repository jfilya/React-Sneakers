import style from "./Card.module.scss";
import React from "react";

function Card({ name, img, price, id, addToFavorite, addToBasket, favorited=false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
    addToBasket({ name, img, price, id });
  };

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    addToFavorite({ name, img, price, id });
  };
  return (
    <div className={style.content__card}>
      <img
        className={"cursor " + style.content__favorite}
        onClick={onClickFavorite}
        src={isFavorite ? "img/liked.svg" : "img/heart.svg"}
        alt="heart"
      />
      <img className={style.content__sneakers} src={img} alt="sneakers" />
      <h5>{name}</h5>
      <div className={style.content__card_bottom}>
        <div className={style.content__price}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={"cursor " + style.content__plus}
          onClick={onClickPlus}
          src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}
export default Card;
