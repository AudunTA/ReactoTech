import React, { useState } from "react";
import "./card.css";

function Card(props) {
  const [clicked, setClicked] = useState(false);
  const handleCartClick = () => {
    props.addProduct(props.fullitem);
    setClicked(true);
  };
  return (
    <div className="card">
      <div className="wrapper-img">
        <img src={props.imgurl} className="img-card"></img>
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
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
