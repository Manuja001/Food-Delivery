import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

function FoodItem({ id, name, image, price, discription, category }) {
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={image} alt={name} className="food-item-image" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img
            src={assets.star_rating}
            alt="rating"
            className="food-item-rating"
          />
        </div>
        <p className="food-item-discription">{discription}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
