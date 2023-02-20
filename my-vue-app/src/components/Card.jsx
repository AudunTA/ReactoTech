import React from "react";
import "./Card.css";
function Card(props) {
  const handleClick = () => {
    props.addToCart(props.title);
  };
  return (
    <div className="card">
      <div className="wrapper-img">
        <img src={props.imgurl} className="img-card"></img>
      </div>

      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button onClick={handleClick} className="btn-addToCart">
        ADD TO CART
      </button>
    </div>
  );
}

export default Card;
