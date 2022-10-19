import style from "./Card.module.scss";
import React from 'react';

function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const onClickPlus = (x, y) => {
    setIsAdded(!isAdded);
  }
 
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  }
  return (
    <div className={style.content__card}>
      <img
        className={"cursor " + style.content__favorite}
        onClick={onClickFavorite}
        src={isFavorite ? "img/liked.svg" : "img/heart.svg"}
        alt="heart"
      />
      <img
        className={style.content__sneakers}
        src={props.imgUrl}
        alt="sneakers"
      />
      <h5>{props.name}</h5>
      <div className={style.content__card_bottom}>
        <div className={style.content__price}>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
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
