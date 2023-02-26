import React from "react";
import "./Cart.css";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import BackHome from "../backHome/BackHome";
function Cart(props) {
  const products = props.cart;
  let totalprice = 0;
  return (
    <>
      <div className="wrapper-App">
        <BackHome />
        <div className="container-cart">
          <div className="cart-container">
            <div className="cart-navigation">
              <h2 className="order-text">Order Summary</h2>
            </div>

            {products.map((ele) => {
              if (ele.discountedPrice < ele.price) {
                totalprice = totalprice + ele.discountedPrice;
              } else {
                totalprice = totalprice + ele.price;
              }

              return (
                <div className="cart-item" key={ele.key}>
                  <div className="cart-img-container">
                    <img src={ele.imageUrl} className="cart-img"></img>
                  </div>
                  <div className="cart-short-description">
                    <div className="cart-top-section">
                      <h2>{ele.title}</h2>
                      <p>{ele.description}</p>
                    </div>

                    {ele.discountedPrice < ele.price ? (
                      <div className="price-displayed">
                        <p className="original-price">{ele.price}KR</p>{" "}
                        <p className="new-price">{ele.discountedPrice}</p>
                      </div>
                    ) : (
                      <p>{ele.price}KR</p>
                    )}
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
