import React from "react";
import "./Cart.css";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
function Cart(props) {
  const products = props.cart;
  let totalprice = 0;
  return (
    <>
      <div className="wrapper-App">
        <div className="container-cart">
          <Link to="/">
            <FontAwesomeIcon className="back-icon" icon={faAngleLeft} />
          </Link>
          <h2 className="order-text">Order Summary</h2>
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
      </div>
    </>
  );
}

export default Cart;
