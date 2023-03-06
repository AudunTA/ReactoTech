import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <div className="card">
      <div className="flex-top-section">
        {props.fullitem.discountedPrice < props.fullitem.price ? (
          <p className="percentage-discount">
            -
            {(
              ((props.fullitem.price - props.fullitem.discountedPrice) * 100) /
              props.fullitem.price
            ).toFixed()}
            %
          </p>
        ) : (
          ""
        )}

        <div
          className="wrapper-img"
          style={{
            backgroundImage: `url(${props.fullitem.imageUrl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <h2>{props.fullitem.title}</h2>
        <p className="description-text">{props.fullitem.description}</p>
      </div>
      <div className="bottom-section">
        {props.fullitem.discountedPrice < props.fullitem.price ? (
          <div className="price-displayed">
            <p className="original-price">{props.fullitem.price}</p>{" "}
            <p className="new-price">{props.fullitem.discountedPrice}KR</p>
          </div>
        ) : (
          <p>{props.fullitem.price}KR</p>
        )}
        <Link to={`/product/?id=${props.fullitem.id}`}>
          <button className="btn-addToCart">View Item</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
