import React from "react";
import style from "./navigation.module.css";
function Pagination() {
  return (
    <div className={style.navigation}>
      <button
        className={`${style.navigation__btn} ${style.navigation__btn__prev} ${style.prev_btn}`}>
        Prev
      </button>
      <div className={style.page_nos}>
        <button className={style.navigation__btn}>1</button>
      </div>
      <button
        className={`${style.navigation__btn} ${style.navigation__btn__next} ${style.next_btn}`}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
