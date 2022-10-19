import style from './Card.module.scss';

function Card(props) {
  return (
    <div className={style.content__card} >
      <div className={"cursor " + style.content__favorite}>
        <img src="img/heart.svg" alt="heart" />
      </div>
      <img className={style.content__sneakers} src={props.imgUrl} alt="sneakers" />
      <h5>{props.name}</h5>
      <div className={style.content__card_bottom}>
        <div className={style.content__price}>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <div className={"cursor " + style.content__btn} onClick={props.addToBasket}>
          <img className={style.content__plus} src="img/btn-plus.svg" alt="plus" />
        </div>
      </div>
    </div>
  );
}
export default Card;
