import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

function FoodItem({ id, name, image, price, discription, category }) {
  const [itemCount, setItemCount] = React.useState(0);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={image} alt={name} className="food-item-image" />
        {!itemCount ? (
          <img
            src={assets.add_icon_white}
            alt="plus"
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="minus"
              className="food-item-minus"
              onClick={() => setItemCount((prev) => prev - 1)}
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt="plus"
              className="food-item-plus"
              onClick={() => setItemCount((prev) => prev + 1)}
            />
          </div>
        )}
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
