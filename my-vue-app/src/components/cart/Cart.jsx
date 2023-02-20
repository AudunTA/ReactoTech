import React from "react";
import "./Cart.css";
import { Outlet, Link } from "react-router-dom";
function Cart(props) {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <div>items in cart: {props.title}</div>
      <div className="cart-container">
        <div className="cart-item">
          <div className="cart-img-container">
            <img
              src="src\images\—Pngtree—headset black music_3743151.png"
              className="cart-img"
            ></img>
          </div>
          <div className="cart-short-description">
            <h2>Bose QuietComfort 45</h2>
            <p>noise-canceling headphones</p>
            <p>Kr 1699</p>
          </div>
        </div>
        <button className="btn-cart">proceed to payment - total 1699kr</button>
      </div>
    </>
  );
}

export default Cart;
