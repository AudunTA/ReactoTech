import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="wrapper-img">
        <img
          src="src\images\—Pngtree—headset black music_3743151.png"
          className="img-card"
        ></img>
      </div>

      <h1>Bose Quiet Comfort 45</h1>
      <p>
        Experience crystal-clear sound with our noise-cancelling headphones -
        perfect for any setting.
      </p>
      <button className="btn-addToCart">Add to cart</button>
    </div>
  );
}

export default Card;
