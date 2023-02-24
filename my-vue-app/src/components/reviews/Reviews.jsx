import React from "react";

function Reviews(props) {
  const reviews = props.reviews;

  return (
    <div>
      <h1>Test</h1>
      {reviews.map((ele) => {
        return (
          <div>
            <p>{ele.username}</p>
            <p>{ele.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
