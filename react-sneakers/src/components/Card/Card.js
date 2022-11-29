import style from "./Card.module.scss";
import React from "react";
import ContentLoader from "react-content-loader"

function Card({
                name,
                img,
                price,
                addToFavorite,
                addToBasket,
                favoriteId = false,
                added = false,
                loading = false,
              }) {

  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favoriteId);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
    addToBasket({name, img, price});
  };
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    addToFavorite({name, img, price});
  };
  return (
    <div className={style.content__card}>
      {loading ? <ContentLoader
        speed={2}
        width={170}
        height={187}
        viewBox="0 0 170 187"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="10" ry="10" width="170" height="91"/>
        <rect x="0" y="108" rx="0" ry="0" width="170" height="15"/>
        <rect x="0" y="130" rx="0" ry="0" width="100" height="15"/>
        <rect x="0" y="172" rx="0" ry="0" width="80" height="24"/>
        <rect x="118" y="165" rx="0" ry="0" width="32" height="32"/>
      </ContentLoader> : <><img
        className={"cursor " + style.content__favorite}
        onClick={onClickFavorite}
        src={isFavorite ? "img/liked.svg" : "img/heart.svg"}
        alt="heart"
      />
        <img className={style.content__sneakers} src={img} alt="sneakers"/>
        <h5>{name}</h5>
        <div className={style.content__card_bottom}>
          <div className={style.content__price}>
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
          <img
            className={"cursor "}
            onClick={onClickPlus}
            src={isAdded ? "img/btn-checked.svg" : "img/btn-plus.svg"}
            alt="plus"
          />
        </div>
      </>
      }


    </div>
  );
}

export default Card;
