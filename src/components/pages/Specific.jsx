import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTruck,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "./Specific.css";
import BackHome from "../backHome/BackHome";
import Reviews from "../reviews/Reviews";
function Specific(props) {
  const [specific, setSpesific] = useState([]);
  const [stars, setStars] = useState(0);
  const [numReviews, setNumReviews] = useState(0);
  const [showReivews, setShowReviews] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const productid = searchParams.get("id");
  let products = props.products;
  useEffect(() => {
    products.map((ele) => {
      if (ele.id === productid) {
        setSpesific(ele);

        setStars(ele.rating);
        setReviews(ele.reviews);
      }
    }, []);
  });
  const handleCartClick = () => {
    props.toCart(specific);
  };
  const handleReviewClick = () => {
    setShowReviews(!showReivews);
  };
  return (
    <div className="wrapper-App">
      <BackHome />
      <div className="container-specific">
        <div className="img-container">
          <img src={specific.imageUrl} className="specific-product-img"></img>
        </div>
        <div className="specific-information">
          <div className="top-section">
            <h2>{specific.title}</h2>
            <p className="text-description">{specific.description}</p>
            <hr className="information-divider"></hr>
            <div className="container-stars" onClick={handleReviewClick}>
              <p>{stars}</p>
              <FontAwesomeIcon className="star-icon" icon={faStar} size={70} />
              <p>({reviews.length})</p>
            </div>
            <div className="delivery-container">
              <div className="wrapper-delivery">
                <FontAwesomeIcon
                  className="icon-truck"
                  icon={faTruck}
                  size={70}
                />
                <p>free delivery</p>
              </div>
            </div>
            <div className="return-container">
              <div className="wrapper-return">
                <FontAwesomeIcon
                  className="icon-truck"
                  icon={faRotateLeft}
                  size={70}
                />
                <p>free 30 days delivery returns</p>
              </div>
            </div>
          </div>

          <div className="bottom-section">
            {specific.discountedPrice < specific.price ? (
              <div className="price-displayed">
                <p className="original-price">{specific.price}</p>{" "}
                <p className="new-price">{specific.discountedPrice}KR</p>
              </div>
            ) : (
              <p>{specific.price}KR</p>
            )}

            <button className="btn_addToCart" onClick={handleCartClick}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {reviews && showReivews ? (
        <Reviews reviews={reviews} show={showReivews} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Specific;
