function Card(props) {
  return (
    <div className="content__card">
      <div className="content__favorite cursor">
        <img src="img/heart.svg" alt="heart" />
      </div>
      <img
        className="content__sneakers"
        src={props.imgUrl}
        alt="sneakers"
      />
      <h5>{props.name}</h5>
      <div className="content__card-bottom">
        <div className="content__price">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <div className="content__btn  cursor">
          <img className="content__plus" src="img/btn-plus.svg" alt="plus" />
        </div>
      </div>
    </div>
  );
}
export default Card;
