import React from "react";
import "./Cart.css";
import { Outlet, Link } from "react-router-dom";

function Cart(props) {
  const products = props.cart;
  let totalprice = 0;
  return (
    <>
      <div className="wrapper-app">
        <Link to="/">
          <button>Home</button>
        </Link>
        <div className="cart-container">
          {products.map((ele) => {
            totalprice = totalprice + ele.price;
            return (
              <div className="cart-item" key={ele.key}>
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

          <button className="btn-cart">
            proceed to payment - total {totalprice.toFixed()}kr
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
