import React from "react";
import style from "./Drawer/Drawer.module.scss";
import {AppContext} from "../App";

const Info = ({image, title, description}) => {
  const {setCartOpened} = React.useContext(AppContext);
  return (
    <div className={style.drawer__empty}>
      <img
        className={style.drawer__empty_img}
        src={image}
        alt="empty"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        className={style.drawer__back + " cursor"}
        onClick={() => setCartOpened(false)}
      >
        <img src="img/arrow.svg" alt="arrow"/> Назад
      </button>
    </div>
  )
}
export default Info;