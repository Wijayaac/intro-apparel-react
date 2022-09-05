import React from "react";
import style from "./style.module.css";

function Form() {
  return (
    <div className={style.form}>
      <form action="#" className={style.form__wrapper} id="form">
        <h2 className={style.form__heading}>Apparel Form</h2>
        <div className={style.form__field}>
          <label htmlFor="apparel-name">Name</label>
          <input
            type="text"
            name="name"
            id="apparel-name"
            data-validation="required"
          />
          <span className={style.form__error__msg}>This field is required</span>
        </div>

        <div className={style.form__field}>
          <label htmlFor="apparel-category">Category</label>
          <select
            name="category"
            id="apparel-category"
            data-validation="required">
            <option value="" defaultValue>
              Select Category
            </option>
            <option value="jackets">Jackets</option>
            <option value="shirts">Shirts</option>
            <option value="shoes">Shoes</option>
            <option value="pants">Pants</option>
          </select>
          <span className={style.form__error__msg}>This field is required</span>
        </div>
        <div className={style.form__field}>
          <label htmlFor="apparel-desc">Product Description</label>
          <textarea
            name="description"
            id="apparel-desc"
            rows="10"
            data-validation="required"></textarea>
          <span className={style.form__error__msg}>This field is required</span>
        </div>

        <div className={style.form__field}>
          <label htmlFor="apparel-price">Price</label>
          <input
            type="number"
            min="0"
            name="price"
            id="apparel-price"
            data-validation="required"
          />
          <span className={style.form__error__msg}>This field is required</span>
        </div>

        <div className={style.form__submit}>
          <button
            className={`${style.form__button} ${style.form__button} ${style.show}`}
            type="button">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
