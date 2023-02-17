import React from "react";
import "./Loader.css";
function Loader() {
  return (
    <div className="container-loader">
      <div className="loading-card">
        <div className="wrapper-img-pulse">
          <img
            src="src\images\—Pngtree—headset black music_3743151.png"
            className="img-pulse"
          ></img>
        </div>
        <div className="skeleton-heading"></div>
        <div className="margin-top-loader">
          <div className="skeleton-description loading-one"></div>
          <div className="skeleton-description loading-two"></div>
          <div className="skeleton-description loading-three"></div>
        </div>
        <div className="margin-top-loader">
          <div className="skeleton-button"></div>
        </div>
      </div>
      <div className="loading-card">
        <div className="wrapper-img-pulse">
          <img
            className="img-pulse"
            src="src\images\—Pngtree—headset black music_3743151.png"
          ></img>
        </div>
        <div className="skeleton-heading"></div>
        <div className="margin-top-loader">
          <div className="skeleton-description loading-one"></div>
          <div className="skeleton-description loading-two"></div>
          <div className="skeleton-description loading-three"></div>
        </div>
        <div className="margin-top-loader">
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
