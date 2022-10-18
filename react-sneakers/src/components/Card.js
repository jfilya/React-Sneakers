function Card() {
  return (
    <div className="content__card">
      <div className="content__favorite cursor">
        <img src="img/heart.svg" alt="heart" />
      </div>
      <img
        className="content__sneakers"
        src="img/sneakers/1.jpg"
        alt="sneakers"
      />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="content__card-bottom">
        <div className="content__price">
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <div className="content__btn  cursor">
          <img className="content__plus" src="img/btn-plus.svg" alt="plus" />
        </div>
      </div>
    </div>
  );
}
export default Card;
