import React from "react";
import "./Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Reviews(props) {
  const reviews = props.reviews;
  const show = props.show;
  console.log(show);
  return (
    <div>
      {reviews.map((ele) => {
        return (
          <div className="wrapper-reviews">
            <div className="reviews-container">
              <div className="flex-container-reviews">
                <div className="stars-container">
                  <FontAwesomeIcon
                    className="icon-star"
                    icon={faStar}
                    size={70}
                  />
                  {ele.rating}
                </div>
                <div className="review-descrption">
                  <p>{ele.description}</p>
                </div>
                <div className="reviewed-by">
                  <div className="top-section-reviewed-by">
                    <p className="review-reviewed-by">reviewed by</p>
                    <p className="review-username">{ele.username}</p>
                  </div>
                  <p className="reviewed-date">Fri Mar 19 2021</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
