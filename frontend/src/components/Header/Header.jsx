import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h1>What is your Favourite food ...?</h1>
        <p>
          We offer a wide variety of options to satisfy your taste buds. Order
          now and enjoy the convenience of our speedy and reliable delivery
          service at your doorstep.
        </p>
        <button>Explore</button>
      </div>
    </div>
  );
}

export default Header;
