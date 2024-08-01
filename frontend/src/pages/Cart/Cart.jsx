import React, { useContext } from "react";
import "./Cart.css";
import { storeContext } from "../../context/StoreContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, food_list, removeFromCart } = useContext(storeContext);

  // if (!cartItems || !food_list) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
          <button >
            <Link to={"/place-order"}>Checkout</Link>
          </button>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            console.log(item.id);
            return (
              <div key={index} className="cart-item">
                <p>{item.name}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
