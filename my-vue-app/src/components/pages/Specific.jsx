import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import "./Specific.css";
function Specific(props) {
  const [specific, setSpesific] = useState([]);
  const [stars, setStars] = useState(0);
  const [numReviews, setNumReviews] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const productid = searchParams.get("id");
  console.log(productid);
  let products = props.products;
  useEffect(() => {
    products.map((ele) => {
      if (ele.id === productid) {
        setSpesific(ele);
        console.log(ele.rating);
        setStars(ele.rating);
        setNumReviews(ele.reviews.length);
      }
    }, []);
  });
  const handleCartClick = () => {
    props.toCart(specific);
  };
  return (
    <div className="wrapper-App">
      <div className="container-specific">
        <div className="img-container">
          <img src={specific.imageUrl} className="specific-product-img"></img>
        </div>
        <div className="specific-information">
          {specific.title}
          <p>{specific.description}</p>
          <div className="container-stars">
            <p>{stars}</p>
            <FontAwesomeIcon className="star-icon" icon={faStar} size={70} />
            <p>({numReviews})</p>
          </div>
          <div className="bottom-section">
            {specific.discountedPrice < specific.price ? (
              <div className="price-displayed">
                <p className="original-price">{specific.price}KR</p>{" "}
                <p className="new-price">{specific.discountedPrice}</p>
              </div>
            ) : (
              <p>{specific.price}KR</p>
            )}
          </div>
          <button onClick={handleCartClick}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Specific;
