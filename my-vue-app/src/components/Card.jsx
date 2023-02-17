import React from "react";
import "./Card.css";
function Card() {
  return (
    <div className="card-container">
      <div className="card">
        <div className="wrapper-img">
          <img
            src="src\images\—Pngtree—headset black music_3743151.png"
            className="img-card"
          ></img>
        </div>

        <h2>Bose Quiet Comfort 45</h2>
        <p>
          Experience crystal-clear sound with our noise-cancelling headphones -
          perfect for any setting.
        </p>
        <button className="btn-addToCart">ADD TO CART</button>
      </div>
      <div className="card">
        <div className="wrapper-img">
          <img
            src="src\images\—Pngtree—headset black music_3743151.png"
            className="img-card"
          ></img>
        </div>

        <h2>Bose Quiet Comfort 45</h2>
        <p>
          Experience crystal-clear sound with our noise-cancelling headphones -
          perfect for any setting.
        </p>
        <button className="btn-addToCart">ADD TO CART</button>
      </div>
    </div>
  );
}

export default Card;
