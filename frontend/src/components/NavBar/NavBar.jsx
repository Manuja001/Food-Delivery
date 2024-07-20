import React from "react";
import { useState } from "react";
import "./NavBar.css";
import { assets } from "../../assets/assets";

function NavBar() {
  const [menu, setMenu] = React.useState("home");

  return (
    <div className="navbar">
      <img src={assets.Logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <img src={assets.shopping_cart} alt="Shopping Cart" className="shopping-cart"/>
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default NavBar;
