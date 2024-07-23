import React from "react";
import { useContext } from "react";
import { storeContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

function FoodDisplay({ category }) {
  const { food_list } = useContext(storeContext);
  return (
    <div className="food-display" id="food-display">
      <h1>Top Dishes For you ...</h1>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <FoodItem
              key={index}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              discription={item.discription}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
