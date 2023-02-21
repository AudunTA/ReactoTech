import React from "react";
import "./Cart.css";
import { Outlet, Link } from "react-router-dom";
import { shallow } from "zustand/shallow";
import { useCartItems } from "../../App";
function Cart(props) {
  const cartItems = useCartItems();
  const products = cartItems.products;
  console.log(products);
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <div>items in cart: {props.title}</div>
      <div className="cart-container">
        {products.map((ele) => {
          return (
            <div className="cart-item">
              <div className="cart-img-container">
                <img src={ele.imageUrl} className="cart-img"></img>
              </div>
              <div className="cart-short-description">
                <h2>{ele.title}</h2>
                <p>{ele.description}</p>
                <p>{ele.price}</p>
              </div>
            </div>
          );
        })}

        <button className="btn-cart">proceed to payment - total 1699kr</button>
      </div>
    </>
  );
}

export default Cart;
