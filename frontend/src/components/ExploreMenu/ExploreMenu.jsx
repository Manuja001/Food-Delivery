import React from "react";
import PropTypes from "prop-types";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Explore our diverse menu, designed to delight every palate. Whether
        you’re in the mood for something classic or eager to try something new,
        our selection offers a variety of dishes to satisfy your cravings.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) => (prev === item.name ? "all" : item.name))
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.name ? "active" : ""}
                src={item.image}
                alt={item.name}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu;
