import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [clicked, setClicked] = useState(false);
  const handleCartClick = () => {
    props.toCart(props.fullitem);
    setClicked(true);
  };
  return (
    <div className="card">
      <div className="flex-top-section">
        <div
          className="wrapper-img"
          style={{
            backgroundImage: `url(${props.imgurl})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>

      <button
        onClick={handleCartClick}
        disabled={clicked}
        className="btn-addToCart"
      >
        {clicked ? "ADDED TO CART" : "ADD TO CART"}
      </button>
    </div>
  );
}

export default Card;
